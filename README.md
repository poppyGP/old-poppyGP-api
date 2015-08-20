poppyGP-API
===========

Serverless back-end for [poppyGP-player][pgp-player] built on [Amazon Web Services][aws] infrastructure components

*Created by Jonathan Ho.*

[pgp-player]://github.com/poppyGP/poppyGP-player
[aws]://aws.amazon.com

Directory Structure
-------------------
```
├── config/                         ──> Configuration
│   ├── config.js
│   └── README.md
├── middleware/                     ──> Middleware
│   ├── middleware_incoming.js
│   └── README.md
├┈┈ node_modules/                   ┈┈> Dependencies
│   ├┈┈ ...
│   └┈┈ ...
├── models/                         ──> Models
│   ├── model_aws.js
│   └── README.md
├── utils/                          ──> Utilities
│   ├── utils.js
│   └── README.md
├┈┈ .env                            ┈┈> Environment Variables
├── .gitignore
├── index.js                        ──> Main Application File
├── package.json
└── README.md                       ──> Dis File.
```



Components
----------

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
