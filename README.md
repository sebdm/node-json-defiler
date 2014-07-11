Json Defiler
============

Recursively merge files in a directory into a single json object.
Useful for breaking out config files into separate folders.

Installation
------------

    $ npm install json-defiler --save

Usage
-----

    var defiler = require('json-defiler');
    var json = defiler('/path/to/dir');

Files named `index.*` do not generate new keys in the json object.

Example
-------

Folder structure:

    root/
    +-- foo/
      +-- bar/
        +-- index.json
      +-- baz/
        +-- a.json
        +-- b.json

Defiler output:

    {
      "foo": {
        "bar": { /* index.json */ },
        "baz": {
          "a": { /* a.json */},
          "b": { /* b.json */ }
        }
      }
    }
