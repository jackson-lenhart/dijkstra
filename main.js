'use strict';

const MinHeap = require('./min-heap/main');

function dijkstra(Adj, s) {
  const queue = new MinHeap();
  const distances = [];
  const predecessors = [];

  for (let i = 0; i < Adj.length; i++) {
    queue.insert(i);
    distances.push(Infinity);
    predecessors.push(undefined);
  }

  distances[s] = 0;

  while (queue.notEmpty()) {
    const u = queue.extractMin();

    for (const [v, w] of Adj[u]) {
      const alt = distances[u] + w;
      if (alt < distances[v]) {
        distances[v] = alt;
        predecessors[v] = u;
      }
    }
  }

  return { distances, predecessors };
}

module.exports = dijkstra;
