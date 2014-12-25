var checkSequence = require( '../utils/checkSequence' );
var expect        = require( 'chai' ).expect;

describe( '#checkSequence', function() {
  it( 'should return false if the pass do not have enough chars', function() {
    expect( checkSequence( '12345', 6 )).to.be.false;
  });
});