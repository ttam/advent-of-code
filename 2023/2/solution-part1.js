const lines = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const maxRed = 12;
const maxGreen = 13;
const maxBlue = 14;

const validGames = [];
for (const game of lines) {
    const [description, bags] = game.split(': ');
    const gameNumber = description.match(/\d+/g)[0];

    let validGame = true;

    const hands = bags.split(';').map(i => i.trim());
    hands.forEach(hand => {
        const red = (hand.match(/(\d+) red/)??[0,0])[1];
        const green = (hand.match(/(\d+) green/)??[0,0])[1];
        const blue = (hand.match(/(\d+) blue/)??[0,0])[1];

        if (red > maxRed || green > maxGreen || blue > maxBlue) {
            validGame = false;
        }
    });

    if (validGame) {
        validGames.push(gameNumber);
    }
}

const solution = validGames.reduce((a, b) => a + parseInt(b), 0)
console.log(solution);
