const { getInput } = require('../lib');

let input = getInput(11).split(" ").map(s => parseInt(s));

let values = {}
input.forEach(v => {
    if (!values[v]) values[v] = 0
    values[v]++;
})

function doShit(v) {
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
}

for (let i = 0; i < 75; i++) {
    const newValues = {}
    Object.entries(values).forEach(([v, a]) => {
        let n = doShit(parseInt(v));
        if (!Array.isArray(n)) n = [n];
        n.forEach(u => {
            if (!newValues[u]) newValues[u] = 0
            newValues[u] += a;
        })
    })
    values = newValues
}

console.log(Object.values(values).reduce((a,b) => a + b))
