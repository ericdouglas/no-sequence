var checkSequence = require( '../utils/checkSequence' );
var expect        = require( 'chai' ).expect;

describe( '#checkSequence', function() {
  it( 'should return false if the pass do not have enough chars', function() {
    expect( checkSequence( '12345', 6 )).to.be.false;
  });

  it( 'should return false if the pass is in ascending order', function() {
    expect( checkSequence( '123456', 6 )).to.be.false;
  });

  it( 'should return false if the pass is in descending order', function() {
    expect( checkSequence( '987654', 6 )).to.be.false;
  });
});