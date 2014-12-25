function checkSize( pass, minSize ) {

  'use strict';

  var status = false;
  var length = pass.length;
  
  if ( typeof minSize === 'number' && length >= minSize ) {
    status = true;
  }

  return status;

}

module.exports = checkSize;