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

  it( 'should return false if the password are letters and are in descending order', function() {
    expect( checkSequence( 'edcba', 6 )).to.be.false;
  });

  it( 'should return false if the password are capital letters and are in ascending order', function() {
    expect( checkSequence( 'DEFGHI', 6 )).to.be.false;
  });

  it( 'should return false if the password are capital letters and are in descending order', function() {
    expect( checkSequence( 'EDCBA', 6 )).to.be.false;
  });

  it( 'should return false if the password is non sequential and do not have enough chars', function() {
    expect( checkSequence( 'a23de6', 8 )).to.be.false;
  });

  it( 'should return true if the password is non sequential and have enough chars', function() {
    expect( checkSequence( 'a23de6', 6 )).to.be.true;
  });

  it( 'should return true if the password is non sequential and have enough chars', function() {
    expect( checkSequence( '123654', 6 )).to.be.true;
  });

  it( 'should return true if the password is non sequential and have enough chars', function() {
    expect( checkSequence( 'ABCdef', 6 )).to.be.true;
  });

  it( 'should return true if the password is "sequential" and end with zero', function() {
    expect( checkSequence( '123450', 6 )).to.be.true;
  });
});