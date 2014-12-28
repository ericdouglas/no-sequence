function generateLastCharTotal( pass ) {
  
  /**
  *
  * Generate the value of the last charCode
  * in passed password
  *
  * @param {String} pass : password to check the last char
  *
  **/

  'use strict';

  var value = 0;
  var length = pass.length;
  var lastChar = pass.charCodeAt( length - 1 );

  value = lastChar * length;

  return value;  

}

module.exports = generateLastCharTotal;