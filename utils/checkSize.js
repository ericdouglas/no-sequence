function checkSize( input, minSize ) {

  'use strict';

  var status = false;
  var length = input.length;
  
  if ( typeof minSize === 'number' && length >= minSize ) {
    status = true;
  }

  return status;

}

module.exports = checkSize;