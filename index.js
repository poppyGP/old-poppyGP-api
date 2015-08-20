// The following example skeleton code shows the format in which
// you write your custom Node.js code:
// exports.handler_name = function(event, context) {
//    console.log("value1 = " + event.key1);
//    console.log("value2 = " + event.key2);
//    ...
//   context.succeed("some message");
// }


/* Load Configuration File
–––––––––––––––––––––––––––––––––––––––––––––––––– */
module.exports.config = require('./config/config');


// Load Models
// ------------------------------

module.exports.models = {
  AWS: require('./models/model_aws')
};



// Load Middleware
// ------------------------------

module.exports.middleware = {
  Incoming: require('./middleware/middleware_incoming')
};
