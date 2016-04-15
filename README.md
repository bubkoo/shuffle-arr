# shuffle-arr

> Randomize the order of the elements in array or array-like object.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/shuffle-arr/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/shuffle-arr/master.svg?style=flat-square)](https://travis-ci.org/mock-end/shuffle-arr)
[![coverage:?](https://img.shields.io/coveralls/mock-end/shuffle-arr/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/shuffle-arr)


Heavily inspirated by [Fisher–Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).


## Install

```
$ npm install --save shuffle-arr 
```


## Usage

> For more use-cases see the [tests](https://github.com/mock-end/shuffle-arr/blob/master/test/spec/index.js)


```js
var shuffle = require('shuffle-arr');

shuffle([1, 2, 3, 4, 5]);
// => [2, 5, 1, 4, 3]

// return a shuffled copy of the given array.
shuffle([1, 2, 3, 4, 5], { copy: true });

shuffle('abcdef');
// => dceafb
```


## Related

- [is-index](https://github.com/gearcase/is-index) - Checks if the given value is a valid array-like index.
- [is-length](https://github.com/gearcase/is-length) - Checks if the given value is a valid array-like length.
- [to-length](https://github.com/gearcase/to-length) - Converts value to an integer suitable for use as the length of an array-like object.
- [pick-item](https://github.com/mock-end/pick-item) - Randomly sampling a item from an array.
- [pick-items](https://github.com/mock-end/pick-items) - Randomly sampling some items from an array. 
- [drop-left](https://github.com/gearcase/drop-left) - Creates a slice of array with n elements dropped from the beginning.
- [drop-right](https://github.com/gearcase/drop-right) - Creates a slice of array with n elements dropped from the end.
- [is-array-like](https://github.com/gearcase/is-array-like) - Checks if the given value is an array or array-like object.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/shuffle-arr/issues/new).
