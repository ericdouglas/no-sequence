var maxTotal = require( '../utils/generateMaxValue' );
var expect   = require( 'chai' ).expect;

describe( '#generateMaxValue', function() {
  it( 'should return the total like if all numbers are equal the last digit', function() {
    expect( maxTotal( '123456' )).to.be.equal( 324 );
  });
});