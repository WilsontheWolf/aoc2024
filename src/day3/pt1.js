const { getInput } = require('../lib');

const input = getInput(3);

const main = /mul\(\d{1,3},\d{1,3}\)/g
const small = /mul\((\d{1,3}),(\d{1,3})\)/


console.log(input.match(main).map(i => {
    const m = i.match(small)
    return m[1] * m[2]
})
.reduce((a,b) => a + b))
