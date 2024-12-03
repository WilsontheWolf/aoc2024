const { getInput } = require('../lib');

const input = getInput(1);

let left = []
let right = []

input.split('\n').map(v => v.split("   ").map(v => parseInt(v)).forEach((v, i) => {
    if (i == 1) right.push(v)
    else left.push(v)
}))

left.sort((a, b) => a - b)
right.sort((a, b) => a - b)

console.log(left)
console.log(right)

console.log(left.map((v, i) => Math.abs(v - right[i])).reduce((a, b) => a + b))
