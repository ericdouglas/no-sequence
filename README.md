# no-sequence

Module to verify sequential passwords.

[![](https://travis-ci.org/thothJS/no-sequence.svg)](https://travis-ci.org/thothJS/no-sequence)
[[![Coverage Status](https://coveralls.io/repos/thothJS/no-sequence/badge.png)](https://coveralls.io/r/thothJS/no-sequence)](https://coveralls.io/r/thothJS/no-sequence)

[![NPM](https://nodei.co/npm/no-sequence.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/no-sequence/)

## Instalation

```sh
npm install no-sequence --save
```

## Usage

```js
var nosq = require( 'no-sequence' );

// return false if "password" is sequential
// ps : verification made by charCode 
// ps2: works with letters and capital letters to

var password = '123456';
var minSize = 6;

nosq.checkSequence( password, minSize );
// false
```

## Tests

```sh
npm test
```

## Contributing

* Take care to maintain the existing coding style.
* Add unit tests for any new or changed functionality.
* Lint and test your code.

## License

The MIT License (MIT)

Copyright (c) 2014-2015 **Eric Douglas**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.