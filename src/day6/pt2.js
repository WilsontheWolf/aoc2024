const { getInput } = require('../lib');

let x, y
let dir = "up"
const seen = new Set();
const input = getInput(6).split("\n").map((r, i) => r.split("").map((c, j) => {
    if (c === "^") {
        x = j
        y = i
        return '.'
    }
    return c
}));

const startX = x
const startY = y
// console.log(input, x, y)

function debug() {
    console.log(input.map((r, i) => r.map((c, j) => {
        // if (seen.has(`${j},${i}`)) return 'X'
        return c
    }).join("")).join("\n") + "\n")
}

function debug2(s, f) {
    console.log(input.map((r, i) => r.map((c, j) => {
        if (f === `${j},${i}`) return 'E'
        if (s.has(`${j},${i},up`)) return '^'
        if (s.has(`${j},${i},down`)) return 'v'
        if (s.has(`${j},${i},left`)) return '<'
        if (s.has(`${j},${i},right`)) return '>'
        return c
    }).join("")).join("\n") + "\n")
}
function next() {
    if (dir === "up") return [x, y - 1];
    if (dir === "down") return [x, y + 1];
    if (dir === "left") return [x - 1, y];
    if (dir === "right") return [x + 1, y];
}

function rotate() {
    if (dir === "up") return dir = "right";
    if (dir === "down") return dir = "left";
    if (dir === "left") return dir = "up";
    if (dir === "right") return dir = "down";
}

while (true) {
    seen.add(`${x},${y}`)
    const [cx, cy] = next();
    const c = input[cy]?.[cx];
    if (c === "#") {
        rotate()
    } else if (c === undefined) {
        break
    } else {
        const [nx, ny] = next();
        x = nx
        y = ny
    }
}

let fin = 0

for (const t of seen) {
    const dirSeen = new Set()
    x = startX
    y = startY
    dir = "up"
    const [ox, oy] = t.split(',').map(v => parseInt(v))
    if (ox === startX && oy === startY)
        continue
    input[oy][ox] = "#"
    while (true) {
        if (dirSeen.has(`${x},${y},${dir}`)) {
            fin++;
            console.log(ox, oy)
            // debug2(dirSeen, `${x},${y}`)
            break
        }
        dirSeen.add(`${x},${y},${dir}`)
        const [cx, cy] = next();
        const c = input[cy]?.[cx];
        if (c === "#") {
            rotate()
        } else if (c === undefined) {
            // debug2(dirSeen, `${x},${y}`)
            break
        } else {
            const [nx, ny] = next();
            x = nx
            y = ny
        }
    }
    input[oy][ox] = "."

}

console.log(fin)
