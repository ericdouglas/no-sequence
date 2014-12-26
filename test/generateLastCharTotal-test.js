var lastCharTotal = require( '../utils/generateLastCharTotal' );
var expect        = require( 'chai' ).expect;

describe( '#generateLastCharTotal', function() {
  it( 'should be equal to the last charcode multiplied by the length', function() {
    expect( lastCharTotal( '123456' )).to.equal( 324 );
  });

  it( 'should be equal to the last charcode multiplied by the length', function() {
    expect( lastCharTotal( '123450' )).to.equal( 288 );
  });

  it( 'should be equal to the last letter(charcode) multiplied by the length', function() {
    expect( lastCharTotal( 'abcdef' )).to.equal( 612 );
  });

  it( 'should be equal to the last capital letter(charcode) multiplied by the length', function() {
    expect( lastCharTotal( 'ABCDEF' )).to.equal( 420 );
  });
});