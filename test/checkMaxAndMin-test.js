var checkMaxAndMin = require( '../utils/checkSequence' );
var expect         = require( 'chai' ).expect;

describe.only( '#checkMaxAndMin', function() {
  it( 'should return false if the password could be in sequence', function() {
    expect( checkMaxAndMin( '100006' )).to.be.false;
  });
});