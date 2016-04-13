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

- [pick-some](https://github.com/bubkoo/pick-some) - Randomly sampling some item(s) from an array(array like object).
- [pick-some-keys](https://github.com/bubkoo/pick-some-keys) - Randomly sampling some key(s) from an object.
- [pick-some-values](https://github.com/bubkoo/pick-some-values) - Randomly sampling some property(s) from an object.
