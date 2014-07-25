var findit = require('findit');
var path = require('path');
var traverse = require('traverse');

module.exports = function (options, callback) {
  if (typeof options === 'string') {
    options = {dir: options};
  }

  var finder = findit(options.dir);
  var error = null;
  var result = {};

  finder.on('error', function (err) {
    error = err;
  });

  finder.on('file', function (file) {
    var ext = path.extname(file).substring(1);
    if (ext !== 'json' && ext !== 'js') return;
    var namespace = options.split ? ext : 'json';
    var property = path.basename(file, path.extname(file));
    var keys = path.dirname(file);
    keys = path.relative(options.dir, keys);
    keys = keys.split(path.sep);
    keys = [namespace].concat(keys);
    if (property !== 'index') keys.push(property);
    traverse(result).set(keys, require(file));
  });

  finder.on('end', function () {
    callback(error, result);
  });
};
