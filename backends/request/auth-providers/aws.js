/**
 * Fetches a bearer token via the aws api
 */

'use strict'

// for API Gateway / EC2 compatability
/* eslint no-sync: 0 */

const aws4 = require('aws4')
const fs = require('fs')
const { Base64 } = require('js-base64')

module.exports = {
  refresh: function (config) {
    return new Promise((resolve, reject) => {
      const args = config['cmd-args'].split(' ')

      const options = {
        host: 'sts.amazonaws.com',
        service: 'sts',
        path: '/?Action=GetCallerIdentity&Version=2011-06-15&X-Amz-Expires=60',
        headers: {
          'x-k8s-aws-id': args[5]
        },
        signQuery: true
      }

      let credentials

      fs.readFile(`./${process.env.AWS_CREDENTIALS}`, 'utf-8', (e, o) => {
        if (e) {
          return reject(
            new Error(
              'Failed to fetch AWS CREDENTIALS... (invalid filename or filetype)'
            )
          )
        }

        o = o.split('\n')
        credentials = {
          accessKeyId: o[0].replace('accessKeyId: ', ''),
          secretAccessKey: o[1].replace('secretAccessKey: ', '')
        }

        const query = aws4.sign(options, credentials)

        let val = `https://${query.host}${query.path}`
        val = Base64.encodeURI(val)
        val = val.replace(/=+$/, '')
        val = `k8s-aws-v1.${val}`
        resolve(val)
      })
    })
  }
}
