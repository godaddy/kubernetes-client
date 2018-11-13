#!/usr/bin/env node
'use strict'
/* eslint-disable no-sync, no-console */

const CodeGen = require('swagger-js-codegen').CodeGen
const fs = require('fs')
const path = require('path')
const zlib = require('zlib')

const mustacheLambdas = {
  /**
   * Remove all non-alphanumeric characters from rendered text.
   * @returns {function} function
   */
  alphanumeric: function () {
    return function (text, render) {
      return render(text).replace(/\W/g, '')
    }
  },

  /**
   * Replace newline characters in rendered text with <br/>s.
   * @returns {function} function
   */
  markdownBreaks: function () {
    return function (text, render) {
      return render(text)
        .replace(/\r\n/g, '<br/>')
        .replace(/\n/g, '<br/>')
    }
  },

  /**
   * When in a method section, return the full kubernetes-client name.
   * @returns {function} function
   */
  jsName: function () {
    return function () {
      const leadingAndTrailingSlashes = /(^\/)|(\/$)/g
      const jsName = this.path
        .replace(leadingAndTrailingSlashes, '')
        .replace(/\/{/g, '(') // replace /{ with (
        .replace(/}\//g, ').') // replace }/ with ).
        .replace(/}/g, ')') // replace } with )
        .replace(/\//g, '.') // replace / with .
      return `${jsName}.${this.method.toLowerCase()}`
    }
  }
}

function generate (input, output) {
  let raw = fs.readFileSync(input)
  if (input.endsWith('.gz')) {
    raw = zlib.gunzipSync(raw)
  }
  const spec = JSON.parse(raw)

  const mustache = Object.assign({
    info: spec.info
  }, mustacheLambdas)

  //
  // https://github.com/wcandillon/swagger-js-codegen
  //
  const source = CodeGen.getCustomCode({
    moduleName: '',
    className: '',
    swagger: spec,
    lint: false,
    esnext: false,
    beautify: false,
    mustache,
    template: {
      class: fs.readFileSync(path.join(__dirname, 'templates/markdown-class.mustache'), 'utf8'),
      method: fs.readFileSync(path.join(__dirname, 'templates/markdown-method.mustache'), 'utf8'),
      type: fs.readFileSync(path.join(__dirname, 'templates/markdown-type.mustache'), 'utf8')
    }
  })

  if (output) {
    fs.writeFileSync(output, source)
  } else {
    console.log(source)
  }
}

function main (args) {
  if (args.builtins) {
    const specs = './lib/specs'
    fs.readdirSync(specs).forEach(filename => {
      const versionRegExp = /swagger-(.+)\.json.gz/
      const match = filename.match(versionRegExp)
      if (!match) {
        console.log(`Skipping ${filename}`)
        return
      }
      const version = match[1]
      const output = `./docs/${version}.md`
      generate(path.join(specs, filename), output)
    })
  }

  if (args.spec) {
    generate(args.spec, args.output)
  }
}

const argv = require('yargs')
  .usage('Usage: $0 [options]')
  .option('spec', {
    alias: 's',
    describe: 'Swagger / OpenAPI specification'
  })
  .option('output', {
    alias: 'o',
    describe: 'Markdown output file'
  })
  .option('builtins', {
    describe: 'Generate Markdown for builtin specifications'
  })
  .strict()
  .help()
  .argv

main(argv)
