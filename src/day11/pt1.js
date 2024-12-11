const { getInput } = require('../lib');

let input = getInput(11).split(" ").map(s => parseInt(s));

for (let i = 0; i < 25; i++)
    input = input.flatMap((v) => {
        if (v === 0) return 1
        if (!(v.toString().length % 2)) {
            const str = v.toString();
            let first = ""
            let second = ""
            for (let i = 0; i < str.length; i++) {
                if (i < str.length / 2) first += str[i]
                else second += str[i]
            }
            return [parseInt(first), parseInt(second)]
        }
        return v * 2024
    })

console.log(input.length)
