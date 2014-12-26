var checkSize = require( '../utils/checkSize' );
var expect    = require( 'chai' ).expect;

describe.only( '#checkSize', function() {
  it( 'should return false if the password is less than minimum size', function() {
    expect( checkSize( '12345', 7 )).to.be.false;
  });

  it( 'should return true if the password is equal the minimum size', function() {
    expect( checkSize( '1234567', 7 )).to.be.true;
  });

  it( 'should return true if the password is bigger than the minimum size', function() {
    expect( checkSize( '123456789', 7 )).to.be.true;
  });

  it( 'should return false if the password are chars and digits and is less than minimum size', function() {
    expect( checkSize( 'a23def', 3 )).to.be.true;
  });
});