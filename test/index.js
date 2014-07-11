var defiler = require('..');
var path = require('path');
var should = require('chai').should();
var fixtures = path.join(__dirname, 'fixtures');

describe('defiler', function () {
  it('should be a function', function () {
    defiler.should.be.a('function');
  });

  it('should take a string', function (done) {
    var dir = path.join(fixtures, 'foo');
    var json = require(fixtures + '/foo.json');
    defiler(dir, function (err, result) {
      json.should.eql(result.json);
      done(err);
    });
  });

  it('should take an object', function (done) {
    var opts = {dir: path.join(fixtures, 'foo')};
    var json = require(fixtures + '/foo.json');
    defiler(opts, function (err, result) {
      json.should.eql(result.json);
      done(err);
    });
  });
});
