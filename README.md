Json Defiler
============

Recursively merge files in a directory into a single json object.
Useful for breaking out config files into separate folders.

[![Build Status](https://travis-ci.org/psirenny/node-json-defiler.png?branch=master)](https://travis-ci.org/psirenny/node-json-defiler)

Installation
------------

    $ npm install json-defiler --save

Usage
-----

    var defiler = require('json-defiler');
    var json = defiler('/path/to/dir').json;

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
      +-- qux/
        +-- index.js

Defiler output:

    {
      "json": {
        "foo": {
          "bar": { /* index.json */ },
          "baz": {
            "a": { /* a.json */},
            "b": { /* b.json */ }
          },
          "qux": { /* index.js */ }
        }
      }
    }

Options
-------

**split** - If set to true, files will be separated by their extension.
Otherwise, all files will be merged into the returned `json` property.
