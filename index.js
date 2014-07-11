var findit = require('findit');
var path = require('path');
var traverse = require('traverse');

module.exports = function (options, callback) {
  if (typeof options === 'string') {
    options = {dir: options};
  }

  var finder = findit(options.dir);
  var error = null;
  var result = {json: {}};

  finder.on('error', function (err) {
    error = err;
  });

  finder.on('file', function (file) {
    if (path.extname(file) !== '.json') return;
    var prop = path.basename(file, path.extname(file));
    var keys = path.dirname(file);
    keys = path.relative(options.dir, keys);
    keys = keys.split(path.sep);
    if (prop !== 'index') keys.push(prop);
    traverse(result.json).set(keys, require(file));
  });

  finder.on('end', function () {
    callback(error, result);
  });
};
