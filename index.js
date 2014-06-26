/*!
 * path-ends-with <https://github.com/jonschlinkert/path-ends-with>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var path = require('path');

/**
 * Return true if the filepath ends with the given string
 *
 * @param  {String} `filepath`
 * @param  {String} `str`
 * @return {Boolean}
 */

module.exports = function endsWith(filepath, str) {
  filepath = path.normalize(filepath);
  str = path.normalize(str);
  return filepath.indexOf(str, filepath.length - str.length) !== -1;
};