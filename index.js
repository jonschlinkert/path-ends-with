'use strict';

var endsWith = require('ends-with');
var normalizePath = require('normalize-path');

module.exports = function(filepath, substr, allowPartialMatch) {
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

  filepath = normalize(filepath, false);
  substr = normalize(substr, false);

  // return true if normalized strings are an exact match
  if (filepath === substr) {
    return true;
  }

  if (endsWith(filepath, substr)) {
    if (allowPartialMatch === true) {
      return true;
    }

    // if the first character in the substring is a
    // dot or slash, we can consider this a match
    var ch = substr.charAt(0);
    if (ch === '.' || ch === '/') {
      return true;
    }

    // since partial matches were not enabled, we can
    // only consider this a match if the next character
    // is a dot or a slash
    var slen = substr.length;
    var next = filepath.slice(-(slen + 1), -slen);
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
