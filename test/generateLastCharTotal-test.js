var lastCharTotal = require( '../utils/generateLastCharTotal' );
var expect = require( 'chai' ).expect;

describe( '#generate last char total', function() {
  it( 'should be equal to the last charcode multiplied by the length', function() {
    expect( lastCharTotal( '123456' )).to.equal( 324 );
  });
});