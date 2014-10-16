/*!
 * path-ends-with <https://github.com/jonschlinkert/path-ends-with>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

var should = require('should');
var endsWith = require('./');


describe('endsWith', function() {
  it('should return true if the path ends with the given string', function() {
    endsWith('foo\\bar\\baz\\', '/').should.equal(true);
    endsWith('foo\\bar\\baz\\', '\\').should.equal(true);
    endsWith('foo/bar/baz/', '/').should.equal(true);
    endsWith('foo/bar/baz', 'baz').should.equal(true);
    endsWith('foo/bar/baz', 'bar/baz').should.equal(true);
    endsWith('foo\\bar\\baz.md', 'baz.md').should.equal(true);
    endsWith('foo\\bar\\baz.md', 'bar/baz.md').should.equal(true);
    endsWith('foo\\bar\\baz.md', '.md').should.equal(true);
  });

  it('should return false if the path does not end with the given string', function() {
    endsWith('foo\\bar\\baz.md', '/').should.equal(false);
    endsWith('foo\\bar\\baz.md', 'baz').should.equal(false);
  });
});
