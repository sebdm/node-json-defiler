var defiler = require('..');
var path = require('path');
var should = require('chai').should();
var dir = path.join(__dirname, 'fixtures/foo');
var expected = require('./fixtures/foo');

describe('defiler', function () {
  it('should be a function', function () {
    defiler.should.be.a('function');
  });

  it('should take a string', function (done) {
    defiler(dir, function (err, result) {
      expected.unsplit.should.eql(result);
      done(err);
    });
  });

  it('should take an object', function (done) {
    var opts = {dir: dir};
    defiler(opts, function (err, result) {
      expected.unsplit.should.eql(result);
      done(err);
    });
  });

  it('should split files by extension', function (done) {
    var opts = {dir: dir, split: true};
    defiler(opts, function (err, result) {
      expected.split.should.eql(result);
      done(err);
    });
  });
});
