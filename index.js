'use strict';

function shuffle(arr, options) {

    if (!arr || !isArrayLike(arr)) {
        throw new TypeError('`arr` should be an array or arrayLike.');
    }

    // arrayLike will always create a copy
    var result = !Array.isArray(arr) || options && options.copy === true
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
}

function isArrayLike(obj) {

    if (typeof obj === 'function' || obj === obj.window) {
        return false;
    }

    var length = 'length' in obj && obj.length;

    return length === 0 || typeof length === 'number' && length > 0 && (length - 1) in obj;
}


module.exports = shuffle;