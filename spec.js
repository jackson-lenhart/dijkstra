const assert = require('assert');

const dijkstra = require('./main');

const tests = [
  {
    title: 'Finds shortest path distances for given Adj starting at index 0',
    assertion: function() {
      const Adj = [
        [[1, 7]],
        [[2, 3]],
        [[3, 2]],
        [[0, 8], [1, 1]]
      ];

      assert.deepStrictEqual(dijkstra(Adj, 0).distances, [0, 7, 10, 12]);
    }
  }
];

let accumulator = 0;

tests.forEach(function(test, index) {
  try {
    test.assertion();
    console.log('\x1b[32m', `${index + 1}. ${test.title}`, '\x1b[0m');
    accumulator++;
  }
  catch (err) {
    console.log('\x1b[31m', `${index + 1}. ${test.title}`, '\x1b[0m');
    console.error(err);
  }
});

console.log(
  '\nTest suite finished.\n'
  + `${accumulator} out of ${tests.length} tests passed`
);
