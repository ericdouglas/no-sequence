function generateMaxValue( pass ) {

  /**
  *
  * Sum each value of the 'pass' like they are in sequence
  * Used to verify ascending order
  *
  * @param {String} pass : password
  *
  **/

  var total = 0;

  var splitPass = pass.split( '' );
  var length = pass.length;

  splitPass
    .forEach( function( digit, index ) {
      total += digit.charCodeAt() + length - ( index + 1 );
    });

  return total;

}

module.exports = generateMaxValue;