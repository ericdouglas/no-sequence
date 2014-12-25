var checkSize             = require( './checkSize' );
var generateMaxValue      = require( './generateMaxValue' );
var generateMInValue      = require( './generateMInValue' );
var generateLastCharTotal = require( './generateLastCharTotal' );

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
  */

  'use strict';

  var sizeOk    = checkSize( pass, size );
  var maxTotal  = generateMaxValue( pass );
  var minTotal  = generateMinValue( pass );
  var lastTotal = generateLastCharTotal( pass );

}

module.exports = checkSequence;