/* Load Environment Variables
–––––––––––––––––––––––––––––––––––––––––––––––––– */
require('dotenv').load();


module.exports = {

    /* AWS Configuration
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    aws: {
      // Should be automatically loaded from `.env` file:
      accessKeyId     : process.env.AWS_ACCESS_KEY,
      secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY,
      region          : process.env.AWS_REGION,
      accountId       : process.env.AWS_ACCOUNT_ID
    },

    /* AWS S3 Configuration
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    s3: {
      src: {
        bucket    : process.env.AWS_S3_SOURCE_BUCKET,
        prefix    : process.env.AWS_S3_SOURCE_BUCKET_PREFIX
      },
      dest: {
        bucket    : process.env.AWS_S3_DEST_BUCKET,
        prefix    : process.env.AWS_S3_DEST_BUCKET_PREFIX
      },
      logs: {
        bucket    : process.env.AWS_S3_LOGS_BUCKET
      }
    },

    /* AWS Lambda Configuration
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    lambda: {
      user        : process.env.AWS_USER_NAME,
      role        : process.env.AWS_LAMBDA_ROLE_NAME,
      exec_role   : process.env.AWS_LAMBDA_EXEC_ROLE_NAME
    },


    /* JSON Web Tokens
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    jwt: {
      expires   : 604800,
      issuer    : process.env.JWT_ISSUER,
      secret    : process.env.JWT_SECRET
    }
};
