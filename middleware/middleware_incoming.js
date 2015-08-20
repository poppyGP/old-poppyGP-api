/* Handles Incoming API Requests
–––––––––––––––––––––––––––––––––––––––––––––––––– */


/* Load Dependencies
–––––––––––––––––––––––––––––––––––––––––––––––––– */
var Config    = require('../config/config');
var Utilities = require('../utils/utils');

var jwt       = require('jsonwebtoken');
var moment    = require('moment');
var _         = require('lodash');


module.exports = new Incoming();


function Incoming() {}


/* Process Incoming Request
–––––––––––––––––––––––––––––––––––––––––––––––––– */
Incoming.prototype.process = function(event, context, callback) {


  // Defaults
  // ------------------------------

  var _this = this;


  // Validate Access Token
  // ------------------------------

  if (!event.access_token) return context.fail({
    status: 400,
    message: 'Missing Access Token'
  });


  // Verify JSON Web Token
  // ------------------------------

  try {
    var user_token = jwt.verify(event.access_token, Config.jwt.secret);
  }
  catch (error) {
    return context.fail({
      status: 401,
      message: 'Invalid or expired access token'
    }, null);
  }


  // Check Token Expiration
  // ------------------------------

  if (user_token.exp && user_token.exp < moment().unix()) {
    return context.fail({
      status: 401,
      message: 'Expired access token'
    }, null);
  }


  // Check Token Issuer
  // ------------------------------

  // Check Issuer
  if (user_token.iss !== Config.jwt.issuer) {
    return context.fail({
      status: 401,
      message: 'Invalid access token'
    }, null);
  }


  // Check Token UserID
  // ------------------------------

  if (!user_token.uid) {
    return context.fail({
      status: 401,
      message: 'Invalid access token'
    }, null);
  }

}
