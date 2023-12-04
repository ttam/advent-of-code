const lines = require('fs').readFileSync('input.txt').toString().trim().split('\n');

// Make the grid a long string of characters
const grid = lines.map(line => line.split('')).flat();
const gridWidth = lines[0].length;

// Offsets of current cell that are considered "adjacent"
const searchOffsets = [
    -(gridWidth + 1),
    -gridWidth,
    -(gridWidth - 1),
    -1,
    1,
    (gridWidth - 1),
    gridWidth,
    (gridWidth + 1)
];

const isGear = char => char === '*'

let currentGearIndex = -1;
let currentNumber = '';
let isPartNumber = false;

const gearsFound = {};

for (let i = 0; i < grid.length; i++) {
    const cell = grid[i];

    const isNumber = cell.match(/\d/) !== null;

    // If we've found a symbol or we've reached the end of a row
    if (isNumber === false || (i % gridWidth) === 0 && currentNumber !== '') {
        if (isPartNumber === true) {
            gearsFound[currentGearIndex] = gearsFound[currentGearIndex] ?? [];
            gearsFound[currentGearIndex].push(currentNumber);
            isPartNumber = false;
        }

        currentNumber = '';
    }

    // If we've found a number
    if (isNumber) {
        // Add it to the current string
        currentNumber = `${currentNumber}${cell}`;

        // If we're not sure if this number is touching a symbol check adjacent cells for an "x"
        if (isPartNumber === false) {
            for (const offset of searchOffsets) {
                const adjacentCell = grid[i + offset];
                if (adjacentCell && isGear(adjacentCell)) {
                    currentGearIndex = i + offset;
                    isPartNumber = true;
                    break;
                }
            }
        }
    }
}

const validGears = Object.values(gearsFound).filter(gear => gear.length === 2);
const solution = validGears.reduce((a, b) => a + parseInt(b[0]) * parseInt(b[1]), 0);
console.log(solution);
