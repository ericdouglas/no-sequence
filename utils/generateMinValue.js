function generateMinValue( pass ) {

  /**
  *
  * Sum each value of the 'pass' like they are in sequence
  * Used to verify descending order
  *
  * @param {String} pass : password
  *
  **/

  var total = 0;

  var splitPass = pass.split( '' );
  var length = pass.length;

  splitPass
    .forEach( function( digit, index ) {
      total += digit.charCodeAt() + ( index - 5 );
    });

  return total;

}

module.exports = generateMinValue;