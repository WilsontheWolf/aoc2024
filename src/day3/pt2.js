const { getInput } = require('../lib');

const input = getInput(3);

const main = /mul\(\d{1,3},\d{1,3}\)|do(?:n't)?\(\)/g
const small = /([\w']+)\((?:(\d{1,3}),(\d{1,3}))?\)/

let enabled = true

console.log(input.match(main)
    .map(i => {
        const m = i.match(small)
        if (m[1] === 'mul') {
            if (enabled)
                return m[2] * m[3]
            return 0
        }
        else if (m[1] === "do") {
            enabled = true
        }
        else enabled = false
        return 0

    })
    .reduce((a,b) => a + b)
)
