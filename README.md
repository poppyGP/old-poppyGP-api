poppyGP-API
===========

Serverless back-end for [poppyGP-player][pgp-player] built on [Amazon Web Services][aws] infrastructure components

*Created by Jonathan Ho.*

[pgp-player]://github.com/poppyGP/poppyGP-player
[aws]://aws.amazon.com



Directory Structure
-------------------
```
├── config/                         --> Configuration
│   ├── config.js
│   └── README.md
├── middleware/                     --> Middleware
│   ├── middleware_incoming.js
│   └── README.md
├┈┈ node_modules/                   --> Dependencies
│   ├┈┈ ...
│   └┈┈ ...
├── models/                         --> Models
│   ├── model_aws.js
│   └── README.md
├── utils/                          --> Utilities
│   ├── utils.js
│   └── README.md
├┈┈ .env                            --> Environment Variables
├── .gitignore
├── index.js                        --> Main Application File
├── package.json
└── README.md                       --> Dis File.
```



Dependencies
------------





Components
----------

__Project Components__

 * [Amazon Web Services][aws]
   * [AWS Lambda][aws-lambda]
   * [AWS API Gateway][aws-api]
   * [AWS S3][aws-s3]
 * [Node.js][nodejs]
   * [AWS SDK for JS][aws-sdk]


[aws-lambda]://aws.amazon.com/lambda
[aws-api]://aws.amazon.com/api-gateway
[aws-s3]://aws.amazon.com/s3
[nodejs]://nodejs.org
[aws-sdk]://aws.amazon.com/AWSJavaScriptSDK/guide/

[npm][npm] is used to manage project dependencies.  Run `npm install` in the application root to do so.

__Project Dependencies__

 * [`aws-sdk`][npm-aws-sdk] - official AWS SDK for Javascript
 * [`async`][npm-async] - asynchronous Javascript utility module
 * [`lodash`][npm-lodash] - Javascript utility library
 * [`dotenv`][npm-dotenv] - `.env` file loader for environmental variables
 * [`moment`][npm-moment] - lightweight Javascript date library

__Maybe Dependencies__

 * [`traverse`](https://www.npmjs.com/package/traverse) - traverse and transform objects by visiting every node on a recursive walk
 * [`xml2js`](https://www.npmjs.com/package/xml2js) - simple XML to JavaScript object converter
 * [`extract-values`](https://www.npmjs.com/package/extract-values) - a simple helper to extract values from a string based on a pattern
 * [`string.js`](https://www.npmjs.com/package/string) - string contains methods that aren't included in the vanilla JavaScript string such as escaping html, decoding html entities, stripping tags, etc.
 * [`request`](https://www.npmjs.com/package/request) - simplified HTTP request client.

 * [`aws2js`](https://www.npmjs.com/package/aws2js) - AWS (Amazon Web Services) APIs client implementation for node.js
 * [`aws-lib`](https://www.npmjs.com/package/aws-lib) - extensible Node.js library for the Amazon Web Services API
 
 * [`dynamodb-doc`](https://www.npmjs.com/package/dynamodb-doc) - DynamoDB Document SDK for Javascript
 * [`dyno`](https://www.npmjs.com/package/dyno) - simple DynamoDB client
 * [`dynamodb-replicator`](https://www.npmjs.com/package/dynamodb-replicator) - dynamodb-replicator offers several different mechanisms to manage redundancy and recoverability on DynamoDB tables.
 
 * [`s3`](https://www.npmjs.com/package/s3) - high level amazon s3 client. upload and download files and directories
 * [`s3-upload-stream`](https://www.npmjs.com/package/s3-upload-stream) - writeable stream for uploading content of unknown size to S3 via the multipart API.
 * [`s3-download-stream`](https://www.npmjs.com/package/s3-download-stream) - very fast concurrent + streaming downloads from S3

 * [`node-lambda`](https://www.npmjs.com/package/node-lambda) - command line tool for locally running and remotely deploying your node.js applications to Amazon Lambda.



[npm]://npmjs.com
[npm-async]://npmjs.com/package/async
[npm-aws-sdk]://npmjs.com/package/aws-sdk
[npm-lodash]://npmjs.com/package/lodash
[npm-dotenv]://npmjs.com/package/dotenv
[npm-moment]://npmjs.com/package/moment


Resources & Links
-----------------

__Projects__

 * [JAWS Stack][jaws]

__Documentation__

 * [AWS SDK S3][aws-sdk-s3]
 * [AWS SDK Lambda][aws-sdk-lambda]


[jaws]://github.com/jaws-stack/JAWS
[aws-sdk-s3]://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor_details
[aws-sdk-lambda]://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Lambda.html#constructor_details



Changelog
---------

|   Date      |  Version  | Summary         |
|:-----------:|----------:|:----------------|
| 20-Aug 2015 | `v0.0.0`  | Initial commit (suspected non-functional code...)


License
-------

> Something goes here...  
> 
> Copyright (c) 2015, Jonathan Ho
> 
> Just let me know if you're interested in reusing any of my code.
>
