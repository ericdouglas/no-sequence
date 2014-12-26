var noSequence = require( 'no-sequence' ).checkSequence;

// example of passwords to be tested
var pass1 = '123456';
var pass2 = '654321';
var pass3 = 'abcdef';
var pass4 = 'fedcba';
var pass5 = 'BCDEFG';
var pass6 = 'GFEDCB';
var pass7 = 'a13rqw';
var pass8 = '123450';

// example of minimum size required for a valid password
var minSizeOne = 6;
var minSizeTwo = 7;

// how to use no-sequence
noSequence( pass1, minSizeOne ); // false
noSequence( pass2, minSizeOne ); // false
noSequence( pass3, minSizeOne ); // false
noSequence( pass4, minSizeOne ); // false
noSequence( pass5, minSizeOne ); // false
noSequence( pass6, minSizeOne ); // false
noSequence( pass7, minSizeOne ); // true
noSequence( pass8, minSizeOne ); // true

noSequence( pass7, minSizeTwo ); // false
noSequence( pass8, minSizeTwo ); // false