const lines = require('fs').readFileSync('input.txt').toString().trim().split('\n');

let solution = 0;

for (const game of lines) {
    const [, bags] = game.split(': ');

    let minRed = 0, minGreen = 0, minBlue = 0;

    const hands = bags.split(';').map(i => i.trim());
    hands.forEach(hand => {
        const red = (hand.match(/(\d+) red/)??[0,0])[1];
        const green = (hand.match(/(\d+) green/)??[0,0])[1];
        const blue = (hand.match(/(\d+) blue/)??[0,0])[1];

        minRed = Math.max(minRed, red);
        minGreen = Math.max(minGreen, green);
        minBlue = Math.max(minBlue, blue);
    });

    solution += (minRed * minGreen * minBlue);
}

console.log(solution);
