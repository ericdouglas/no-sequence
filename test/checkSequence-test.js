var checkSequence = require( '../utils/checkSequence' );
var expect        = require( 'chai' ).expect;

describe( '#checkSequence', function() {
  it( 'should return false if the password do not have enough chars', function() {
    expect( checkSequence( '12345', 6 )).to.be.false;
  });

  it( 'should return false if the password is in ascending order', function() {
    expect( checkSequence( '123456', 6 )).to.be.false;
  });

  it( 'should return false if the password is in descending order', function() {
    expect( checkSequence( '987654', 6 )).to.be.false;
  });

  it( 'should return false if the password are letters and are in ascending order', function() {
    expect( checkSequence( 'defghi', 6 )).to.be.false;
  });
});