var checkMaxAndMin = require( '../utils/checkMaxAndMin' );
var expect         = require( 'chai' ).expect;

describe( '#checkMaxAndMin', function() {
  it( 'should return false if the password could be in sequence', function() {
    expect( checkMaxAndMin( '100006' )).to.be.false;
  });

  it( 'should return true if the password could not be in sequence', function() {
    expect( checkMaxAndMin( '100002' )).to.be.true;
  });

  it( 'should return true if the password could not be in sequence', function() {
    expect( checkMaxAndMin( '123450' )).to.be.true;
  });
});