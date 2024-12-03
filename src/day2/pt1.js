const { getInput } = require('../lib');

const input = getInput(2)
    .split("\n").map(r => r.split(" ").map(v => parseInt(v)));

console.log(input.map(r => {
    let allUp = true
    r.forEach((v, i) => {
        if (v >= (r[i + 1] || Infinity)) {
            allUp = false
        }
    })
    let allDown = true
    r.forEach((v, i) => {
        if (v <= (r[i + 1] || -Infinity)) {
            allDown = false
        }
    })
    let changeSafe =  true
    r.forEach((v, i) => {
        let diff = Math.abs(v - (r[i + 1] || v + 1))
        if (diff < 1 || diff > 3 ) {
            changeSafe = false
        }
    })
    return (allUp || allDown) && changeSafe
})
.reduce((a,b) => Number(b) + a, 0)
)

