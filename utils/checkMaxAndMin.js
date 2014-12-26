function checkMaxAndMin( pass ) {

  /**
  *
  * Check the difference between first and last char of the pass
  *
  * @param {String} pass : password
  *
  * return false if the chars can be in sequence
  * return true if the chars can not be in sequence
  *
  **/

  var result = true;
  var length = pass.length;
  var first = pass[ 0 ].charCodeAt();
  var last = pass[ length - 1 ].charCodeAt();
  
  if ( Math.abs( last - first ) === length - 1 ) {
    result = false;
  }

  return result;

}

module.exports = checkMaxAndMin;