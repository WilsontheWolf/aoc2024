const { getInput } = require('../lib');

const input = getInput(5).split("\n\n");

const rules = input[0].split("\n").map(l => l.split("|").map(s => parseInt(s)))

const updates = input[1].split("\n").map(l => l.split(",").map(s => parseInt(s)))

const requirements = {}

rules.forEach(([x, y]) => {
    if (!requirements[y]) {
        requirements[y] = []
    }
    requirements[y].push(x)
})

let sum = 0
updates.forEach(u => {
    const done = []
    let good = true
    u.reverse().forEach(p => {
        if (!good) return
        if ((requirements[p] || []).find(r => u.includes(r) && done.includes(r))) {
            good = false
            return console.log(p, 'in')
        }
        done.push(p)
    })
    if (!good) return
    if(!(u.length % 2)) throw "even"
    sum += u[(u.length - 1)/2]
})

console.log(sum)
