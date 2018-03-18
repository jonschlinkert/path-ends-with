/*!
 * path-ends-with <https://github.com/jonschlinkert/path-ends-with>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var path = require('path');

module.exports = function(filepath, substr, options) {
  if (typeof filepath !== 'string') {
    throw new TypeError('expected filepath to be a string');
  }
  if (typeof substr !== 'string') {
    throw new TypeError('expected substring to be a string');
  }

  if (filepath === '' || substr === '') {
    return false;
  }

  if (filepath === substr) {
    return true;
  }

  if (options && options.nocase === true) {
    filepath = filepath.toLowerCase();
    substr = substr.toLowerCase();
  }

  if (substr[0] === '/' || substr[0] === '\\') {
    return startsWith(filepath, substr);
  }

  var a = filepath.split(/[\\/]+/);
  var b = substr.split(/[\\/]+/);

  if (options && options.partialMatch === true) {
    return startsWith(a.join('/'), b.join('/'));
  }

  if (b.length === 1) {
    var last = a[a.length - 1];
    var ext = path.extname(last);
    return last === substr || ext === substr || ext.slice(1) === substr;
  }

  while (b.length && a.length) {
    if (b.pop() !== a.pop()) {
      return false;
    }
  }
  return true;
};

function startsWith(a, b) {
  return a.slice(-b.length) === b;
}
