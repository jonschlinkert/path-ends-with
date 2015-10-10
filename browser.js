(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * Module dependencies
 */

var endsWith = require('ends-with');
var normalize = require('normalize-path');

/**
 * Return true if `filepath` ends with the given `string`
 *
 * @param  {String} `filepath`
 * @param  {String} `string`
 * @return {Boolean}
 */

module.exports = function(fp, str) {
  return endsWith(normalize(fp, false), normalize(str, false));
};

},{"ends-with":2,"normalize-path":3}],2:[function(require,module,exports){
/*!
 * ends-with <https://github.com/jonschlinkert/ends-with>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (a, b) {
  if (Array.isArray(a)) {
    return a[a.length - 1] === b;
  }

  a = String(a);
  b = String(b);

  var i = b.length;
  var len = a.length - i;

  while (i--) {
    if (b.charAt(i) !== a.charAt(len + i)) {
      return false;
    }
  }
  return true;
};

},{}],3:[function(require,module,exports){
/*!
 * normalize-path <https://github.com/jonschlinkert/normalize-path>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License
 */

module.exports = function normalizePath(str, stripTrailing) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }
  str = str.replace(/[\\\/]+/g, '/');
  str = str.replace(/^\.\//, '');
  if (stripTrailing !== false) {
    str = str.replace(/\/$/, '');
  }
  return str;
};

},{}]},{},[1]);
