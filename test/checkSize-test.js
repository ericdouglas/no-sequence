var checkSize = require( '../utils/checkSize' );
var expect    = require( 'chai' ).expect;

describe( '#checkSize', function() {
  it( 'should return false if the password is less than minimum size', function() {
    expect( checkSize( '12345', 6 )).to.be.false;
  });

  it( 'should return true if the password equal the minimum size', function() {
    expect( checkSize( '123456', 6 )).to.be.true;
  });
});