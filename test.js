'use strict';

/*!
 * path-ends-with <https://github.com/jonschlinkert/path-ends-with>
 *
 * Copyright (c) 2014, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

require('mocha');
var assert = require('assert');
var endsWith = require('./');

describe('endsWith', function() {
  it('should be false when the given substring is an empty string', function() {
    assert(!endsWith('foo\\bar\\baz\\', ''));
  });

  it('should work when the path ends with unix slashes', function() {
    assert(endsWith('foo/bar/baz/', '/'));
    assert(endsWith('foo/bar/baz//', '//'));
    assert(!endsWith('foo/bar/baz', '/'));
  });

  it('should work when the path ends with windows slashes', function() {
    assert(endsWith('foo\\bar\\baz\\', '/'));
    assert(endsWith('foo\\bar\\baz\\', '\\'));
    assert(endsWith('foo\\bar\\baz\\\\', '\\\\'));
  });

  it('should be true when the path ends with a string', function() {
    assert(endsWith('foo/bar/baz', 'baz'));
    assert(endsWith('foo/bar/baz', '/baz'));
    assert(endsWith('foo/bar/baz', 'bar/baz'));
    assert(endsWith('foo\\bar\\baz.md', 'baz.md'));
    assert(endsWith('foo\\bar\\baz.md', 'bar/baz.md'));
    assert(endsWith('foo\\bar\\baz.md', '.md'));
    assert(endsWith('foo\\bar\\baz.md', 'md'));
    assert(!endsWith('foo\\bar\\baz.md', 'z.md'));
  });

  it('should be false when the path does not end with the string', function() {
    assert(!endsWith('foo\\bar\\baz.md', '/'));
    assert(!endsWith('foo\\bar\\baz.md', 'baz'));
  });

  it('should be false when the substring is a "partial" match', function() {
    assert(!endsWith('foo\\bar\\bazqux', 'qux'));
    assert(!endsWith('foo\\bar\\baz.md', 'baz'));
  });
});
