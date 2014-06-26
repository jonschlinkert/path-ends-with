/*!
 * path-ends-with <https://github.com/jonschlinkert/path-ends-with>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

var expect = require('chai').expect;
var endsWith = require('../');


describe('endsWith', function() {
  it('should return true if the path ends with the given string', function() {
    expect(endsWith('foo\\bar\\baz\\', '/')).to.equal(true);
    expect(endsWith('foo\\bar\\baz\\', '\\')).to.equal(true);
    expect(endsWith('foo/bar/baz/', '/')).to.equal(true);
    expect(endsWith('foo/bar/baz', 'baz')).to.equal(true);
    expect(endsWith('foo/bar/baz', 'bar/baz')).to.equal(true);
    expect(endsWith('foo\\bar\\baz.md', 'baz.md')).to.equal(true);
    expect(endsWith('foo\\bar\\baz.md', 'bar/baz.md')).to.equal(true);
    expect(endsWith('foo\\bar\\baz.md', '.md')).to.equal(true);
  });

  it('should return false if the path does not end with the given string', function() {
    expect(endsWith('foo\\bar\\baz.md', '/')).to.equal(false);
    expect(endsWith('foo\\bar\\baz.md', 'baz')).to.equal(false);
  });
});
