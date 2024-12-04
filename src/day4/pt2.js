const { getInput } = require('../lib');

const input = getInput(4)
    .split("\n").map(r => r.split(""));

console.log(input)

let str = 'MAS'.split('')
let count = 0;

let matches = []

input.forEach((r, y) => {
    r.forEach((c, x) => {
        if (c !== 'A') return
        let localMatches = 0
        // Diagonal Up Right
        console.log(input[y + 1]?.[x - 1], input[y - 1]?.[x + 1])
        if (input[y + 1]?.[x - 1] === 'M' && input[y - 1]?.[x + 1] === 'S')
            localMatches++;
        // Diagonal Up left
        if (input[y + 1]?.[x + 1] === 'M' && input[y - 1]?.[x - 1] === 'S')
            localMatches++;
        // Diagonal Down right
        if (input[y - 1]?.[x - 1] === 'M' && input[y + 1]?.[x + 1] === 'S')
            localMatches++;
        // Diagonal Down left
        if (input[y - 1]?.[x + 1] === 'M' && input[y + 1]?.[x - 1] === 'S')
            localMatches++;
        console.log(x, y, localMatches)
        if (localMatches >= 2) count++
    })
})

console.log(count)

// console.log(matches)
