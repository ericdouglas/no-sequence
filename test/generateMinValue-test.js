var minTotal = require( '../utils/generateMinValue' );
var expect   = require( 'chai' ).expect;

describe( '#generateMinValue', function() {
  it( 'should return the total like if all numbers are equal the last digit', function() {
    expect( minTotal( '654321' )).to.be.equal( 294 );
  });

  it( 'should return the total like if all letters are equal the last', function() {
    expect( minTotal( 'fedcba' )).to.be.equal( 582 );
  });

  it( 'should return the total like if all capital letters are equal the last', function() {
    expect( minTotal( 'GFEDCB' )).to.be.equal( 396 );
  });
});