'use strict';

/**
 * Module dependencies
 */

var path = require('path');
var endsWith = require('ends-with');

/**
 * Return true if `filepath` ends with the given `str`ing
 *
 * @param  {String} `filepath`
 * @param  {String} `str`
 * @return {Boolean}
 */

module.exports = function(fp, str) {
  return endsWith(path.normalize(fp), path.normalize(str));
};