exports.split = {
  js: {
    qux: {
      a: true,
      b: false
    }
  },
  json: {
    bar: [0, 1, 2],
    baz: {
      a: {val: 2},
      b: {val: 3}
    }
  }
};

exports.unsplit = {
  json: {
    bar: [0, 1, 2],
    baz: {
      a: {val: 2},
      b: {val: 3}
    },
    qux: {
      a: true,
      b: false
    }
  }
};
