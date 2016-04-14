'use strict';

var isArray     = require('is-array');
var isArrayLike = require('is-array-like');


module.exports = function (arr, options) {

  if (!arr || !isArrayLike(arr)) {
    return arr;
  }

  // arrayLike will always create a copy
  var result = (!isArray(arr) || options && options.copy === true)
    ? [].slice.call(arr)
    : arr;

  var length = arr.length;
  var random;
  var temp;

  while (length) {
    random = Math.floor(Math.random() * length);
    length -= 1;

    temp           = result[length];
    result[length] = result[random];
    result[random] = temp;
  }

  return typeof arr === 'string' ? result.join('') : result;
};
