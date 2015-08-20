/* Utility Functions
–––––––––––––––––––––––––––––––––––––––––––––––––– */



/* Load Dependencies
–––––––––––––––––––––––––––––––––––––––––––––––––– */
var uuid = require('node-uuid');    // RFC4122 UUID Implementation


module.exports = new Utilities();


function Utilities() {}



/* Generate Unique ID
–––––––––––––––––––––––––––––––––––––––––––––––––– */
Utilities.prototype.generateID = function(type) {

  switch (type) {

    case 'user':
      return 'u_' + uuid.v1();

  }

};
