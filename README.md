# shuffle-arr

> Randomize the order of the elements in an array(array like object).

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/shuffle-arr/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/shuffle-arr/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/shuffle-arr)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/shuffle-arr/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/shuffle-arr)


Heavily inspirated by [Fisher–Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).


## Install

```
$ npm install --save shuffle-arr 
```


## Usage

```js
var shuffle = require('shuffle-arr');

shuffle([1, 2, 3, 4, 5]);

// return a shuffled copy of the given array.
shuffle([1, 2, 3, 4, 5], { copy: true });
```


## API

### shuffle(arr, [options])

`arr` an array or an array like object. 

If `arr` is an array like object or `options.copy` is `true`, then return a shuffled copy.


## Related

- [is-array-like](https://github.com/bubkoo/is-array-like) - Checks if the given value is an array or an array-like object.
- [is-index](https://github.com/bubkoo/is-index) - Checks if the given value is a valid array-like index.
- [is-length](https://github.com/bubkoo/is-length) - Checks if the given value is a valid array-like length.
- [to-length](https://github.com/bubkoo/to-length) - Converts value to an integer suitable for use as the length of an array-like object.
- [pick-item](https://github.com/bubkoo/pick-item) - Randomly sampling a item from an array.
- [pick-items](https://github.com/bubkoo/pick-items) - Randomly sampling some items from an array. 
- [drop-left](https://github.com/bubkoo/drop-left) - Creates a slice of array with n elements dropped from the beginning.
- [drop-right](https://github.com/bubkoo/drop-right) - Creates a slice of array with n elements dropped from the end.
