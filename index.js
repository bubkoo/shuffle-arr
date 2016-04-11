'use strict';

var isArrayLike = require('is-array-like');

function isArray(val) {
    return Object.prototype.toString.call(val) === '[object Array]';
}


module.exports = function (arr, options) {

    if (!arr || !isArrayLike(arr)) {
        throw new TypeError('`arr` should be an array or arrayLike.');
    }

    // arrayLike will always create a copy
    var result = !isArray(arr) || options && options.copy === true
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

    return result;
};
