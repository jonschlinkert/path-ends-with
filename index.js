'use strict';

var endsWith = require('ends-with');
var normalizePath = require('normalize-path');

module.exports = function pathEndsWith(filepath, substr, options) {
  if (typeof filepath !== 'string') {
    throw new TypeError('expected filepath to be a string');
  }
  if (typeof substr !== 'string') {
    throw new TypeError('expected substring to be a string');
  }

  if (substr === '') {
    return false;
  }

  // return true if the given strings are an exact match
  if (filepath === substr) {
    return true;
  }

  if (substr.charAt(0) === '!') {
    return !pathEndsWith(filepath, substr.slice(1), options);
  }

  options = options || {};
  if (options.nocase === true) {
    filepath = filepath.toLowerCase();
    substr = substr.toLowerCase();
  }

  var str = normalize(substr, false);

  // return false if the normalized substring is only a slash
  if (str === '/') {
    return false;
  }

  var fp = normalize(filepath, false);

  // return true if normalized strings are an exact match
  if (fp === str) {
    return true;
  }

  if (endsWith(fp, str)) {
    if (options.partialMatch === true) {
      return true;
    }

    // if the first character in the substring is a
    // dot or slash, we can consider this a match
    var ch = str.charAt(0);
    if (ch === '.' || ch === '/') {
      return true;
    }

    // since partial matches were not enabled, we can
    // only consider this a match if the next character
    // is a dot or a slash
    var idx = fp.length - str.length;
    var next = fp.charAt(idx - 1);
    return next === '.' || next === '/';
  }

  return false;
};

function normalize(str) {
  str = normalizePath(str, false);
  if (str.slice(0, 2) === './') {
    str = str.slice(2);
  }
  return str;
}
