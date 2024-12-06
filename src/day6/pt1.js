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

// console.log(input, x, y)

function debug() {
    console.log(input.map((r, i) => r.map((c, j) => {
        if (seen.has(`${j},${i}`)) return 'X'
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
        debug()
    } else if (c === undefined) {
        return console.log("done", seen.size)
    } else {
        const [nx, ny] = next();
        x = nx
        y = ny
    }
}
