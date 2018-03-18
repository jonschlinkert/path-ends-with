'use strict';

require('mocha');
var assert = require('assert');
var endsWith = require('./');

describe('endsWith', function() {
  it('should be false when the substring or filepath are empty strings', function() {
    assert(!endsWith('foo\\bar\\baz\\', ''));
    assert(!endsWith('', 'foo\\bar\\baz\\'));
    assert(!endsWith('', ''));
  });

  it('should work when the path ends with unix slashes', function() {
    assert(endsWith('foo/bar/baz/', 'baz/'));
    assert(endsWith('foo/bar/baz//', 'baz//'));
    assert(!endsWith('foo/bar/baz', 'baz/'));
  });

  it('should work when the path ends with windows slashes', function() {
    assert(endsWith('foo\\bar\\baz\\', 'baz/'));
    assert(endsWith('foo\\bar\\baz\\', 'baz\\'));
    assert(endsWith('foo\\bar\\baz\\\\', 'baz\\\\'));
    assert(!endsWith('foo\\bar\\baz', 'baz\\\\'));
  });

  it('should be true when the path ends with a string', function() {
    assert(endsWith('foo/bar/baz.js', '/baz.js'));
    assert(endsWith('foo/bar/baz.js', '/bar/baz.js'));
    assert(endsWith('foo/bar/baz.js', 'baz.js'));
    assert(endsWith('foo/bar/baz.js', 'bar/baz.js'));
    assert(endsWith('foo/bar/baz', '/baz'));
    assert(endsWith('foo/bar/baz', 'bar/baz'));
    assert(endsWith('foo\\bar\\baz.md', 'baz.md'));
    assert(endsWith('foo\\bar\\baz.md', 'bar/baz.md'));
    assert(!endsWith('foo\\bar\\baz.md', 'z.md'));
  });

  it('should be true when the path ends with a file extension', function() {
    assert(endsWith('foo/bar/baz.md', 'md'));
    assert(endsWith('foo/bar/baz.md', '.md'));
    assert(endsWith('foo\\bar\\baz.md', 'md'));
    assert(endsWith('foo\\bar\\baz.md', '.md'));
    assert(!endsWith('foo/bar.md/baz', '.md'));
    assert(!endsWith('foo/.git/baz', '.git'));
  });

  it('should be false when the path does not end with the string', function() {
    assert(!endsWith('foo\\bar\\baz.md', '/'));
    assert(!endsWith('foo\\bar\\baz.md', 'baz'));
  });

  it('should be false when the substring is a "partial" match', function() {
    assert(!endsWith('foo\\bar\\bazqux', 'qux'));
    assert(!endsWith('foo\\bar\\baz.md', 'baz'));
    assert(!endsWith('foo\\bar\\baz.md', 'r\\baz.md'));
    assert(endsWith('foo\\bar\\bazqux', 'qux', { partialMatch: true }));
    assert(endsWith('foo\\bar\\baz.md', 'r\\baz.md', { partialMatch: true }));
    assert(endsWith('foo\\bar\\baz.md', 'r/baz.md', { partialMatch: true }));
  });

  it('should be case sensitive by default', function() {
    assert(!endsWith('foo/bar', 'BAR'));
    assert(!endsWith('foo/bar/baz', 'BAR/baz'));
  });

  it('should not be case sensitive when options.nocase is true', function() {
    assert(endsWith('foo/bar', 'BAR', { nocase: true }));
    assert(endsWith('foo/bar/baz', 'BAR/baz', { nocase: true }));
  });

  it('should correctly handle trailing slashes', function() {
    assert(endsWith('/foo/', '/'));
    assert(endsWith('/foo/', '/foo/'));
    assert(!endsWith('/foo', '/'));
    assert(!endsWith('/foo', 'foo/'));
    assert(!endsWith('/foo', '/foo/'));
    assert(!endsWith('/foo/', '//'));
    assert(!endsWith('/foo/', '///'));
    assert(!endsWith('/foo/', '\\\\'));
    assert(!endsWith('/foo/', '\\'));
  });
});
