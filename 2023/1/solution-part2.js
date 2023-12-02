const lines = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const map = { one: 'o1e', two: 't2o', three: 't3e', four: 'f4r', five: 'f5e', six: 's6x', seven: 's7n', eight: 'e8t', nine: 'n9e' };

const solution = lines
    .map(line => {
        for (const word in map) {
            line = line.replaceAll(word, map[word]);
        }

        return line;
    })
    .map(i => i.replace(/\D/g, ''))
    .map(i => i.substring(0, 1) + i.slice(-1))
    .reduce((a, b) => a + parseInt(b), 0);

console.log(solution);
