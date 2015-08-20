/* Configure & Instantiate AWS Components
–––––––––––––––––––––––––––––––––––––––––––––––––– */


/* Load Dependencies
–––––––––––––––––––––––––––––––––––––––––––––––––– */
var Config  = require('../config/config');
var AWS     = require('aws-sdk');


/* Configure AWS
–––––––––––––––––––––––––––––––––––––––––––––––––– */
AWS.config.update({
  accessKeyId     : Config.aws.accessKeyId
  secretAccessKey : Config.aws.secretAccessKey
  region          : Config.aws.region
});


/* Configure S3
–––––––––––––––––––––––––––––––––––––––––––––––––– */
var s3bucket = new AWS.S3({
  params: {
    Bucket: Config.s3.dest.bucket
  }
});



/* Configure DynamoDB
–––––––––––––––––––––––––––––––––––––––––––––––––– */
// module.exports.DynamoDB = function() {
//     var DOC = require('dynamodb-doc');
//     return new DOC.DynamoDB(new AWS.DynamoDB());
// };


/* Configure Lambda
–––––––––––––––––––––––––––––––––––––––––––––––––– */
module.exports.Lambda = new AWS.Lambda();
