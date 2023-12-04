const lines = require('fs').readFileSync('input.txt').toString().trim().split('\n');

let solution = 0;

lines.forEach(line => {
    let [winningNumbers, myNumbers] = line.substring(line.indexOf(':') + 2).split(' | ');

    winningNumbers = winningNumbers.trim().split(/\s+/).map(i => parseInt(i));
    myNumbers = myNumbers.trim().split(/\s+/).map(i => parseInt(i));

    const matches = winningNumbers.filter(i => myNumbers.includes(i)).length;
    const score = matches > 0 ? Math.pow(2, (matches - 1)) : 0;

    solution += score;
});

console.log(solution);
