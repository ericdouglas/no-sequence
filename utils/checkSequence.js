var utils = require( './' );

function checkSequence( pass, size ) {

  /*
  *
  * Check if the 'pass' have a minimum size and
  * is in ascending or descending order, like
  * '123456', '654321' or 'ABCDEF' and 'fedcba'
  *
  * @param {String} pass : password to verify
  * @param {Number} size : minimum size to be a valid password
  *
  * return false if pass is sequential or do not have enough chars
  * return true if pass is not sequential and have enough chars
  *
  */

  'use strict';

  var status = true;

  var sizeOk    = utils.checkSize( pass, size );
  var maxTotal  = utils.generateMaxValue( pass );
  var minTotal  = utils.generateMinValue( pass );
  var lastTotal = utils.generateLastCharTotal( pass );

  if ( !sizeOk ) {
    status = false;
  } else if ( lastTotal === maxTotal || lastTotal === minTotal ) {
    status = false;
  }

  return status;

}

module.exports = checkSequence;
