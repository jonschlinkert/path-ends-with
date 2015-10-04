'use strict';

/**
 * Module dependencies
 */

var path = require('path');
var endsWith = require('ends-with');

/**
 * Return true if `filepath` ends with the given `string`
 *
 * @param  {String} `filepath`
 * @param  {String} `str`
 * @return {Boolean}
 */

module.exports = function(fp, string) {
  return endsWith(path.normalize(fp), path.normalize(string));
};