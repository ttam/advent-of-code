let lines = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const copy = structuredClone(lines);

let max = lines.length;
for(let i = 0; i < max; i++) {
    const line = lines[i];
    const cardNumber = parseInt(line.match(/\d+/)[0]);
    let [winningNumbers, myNumbers] = line.substring(line.indexOf(':') + 2).split(' | ');

    winningNumbers = winningNumbers.trim().split(/\s+/).map(i => parseInt(i));
    myNumbers = myNumbers.trim().split(/\s+/).map(i => parseInt(i));

    const matches = winningNumbers.filter(i => myNumbers.includes(i)).length;
    if (matches > 0) {
        lines.push(...copy.slice(cardNumber, cardNumber + matches));
        max = lines.length;
    }
};

const solution = lines.length;
console.log(solution);
