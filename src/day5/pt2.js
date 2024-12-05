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
    let good
    u.reverse()
    do {
        good = true
        let bad = 0
        u.forEach((p, i) => {
            if (!good) return
            if ((requirements[p] || []).find(r => u.includes(r) && done.includes(r))) {
                good = false
                bad = i
                console.log(requirements[p])
                return console.log(p, 'in')
            }
            done.push(p)
        })
        if (!good) {
            // console.log(u)
            // const b = u.splice(bad, 1)
            // const n = u.findIndex((v, j) => j < bad && requirements[b].includes(v))
            // console.log(b, bad)
            // u.splice(n, 0, b[0])
            // console.log(u)
            console.log(u.sort((a, b) => {
                return (requirements[a] || []).includes(b) ? 0 : -1
            }))
            // good = true // TODO: 
        }
    } while (false)
    if (good) return
    if (!(u.length % 2)) throw "even"
    sum += u[(u.length - 1) / 2]
})

console.log(sum)
