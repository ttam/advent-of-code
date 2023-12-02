const lines = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const solution = lines
    .map(i => i.replace(/\D/g, ''))
    .map(i => i.substring(0, 1)+i.slice(-1))
    .reduce((a, b) => a + parseInt(b), 0);

console.log(solution);
