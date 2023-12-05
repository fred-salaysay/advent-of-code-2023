// > 132273
console.time("script");

const { readInput } = require("../readInput");
const input = readInput("day4")
    .split("\n")
    .flatMap((x) => x.split(":")[1])
    .map((x) => x.split("|"))
    .map((x) => x.map((y) => y.trim()))
    .map((x) =>
        x.map((y) =>
            y
                .split(" ")
                .filter((x) => x.trim())
                .map((i) => Number(i)),
        ),
    );

const map = new Map();

let total = 0;
let gTotal = 0;

const f = (x) => {
    const [left, right] = x;
    map.set(x, 0);
    const matches = [...new Set(right.filter((r) => left.includes(r)))];
    const formula = matches.length === 0 ? 0 : 2 ** (matches.length - 1);
    total += formula;
};

const g = (x, i) => {
    const [left, right] = x;
    const iMatches = [...new Set(right.filter((r) => left.includes(r)))];
    const formula = iMatches.length === 0 ? 0 : 2 ** (iMatches.length - 1);
    gTotal += formula;
    [...Array(iMatches.length).keys()].forEach((idx) => {
        const [left, right] = input[idx + i + 1];
        const matches = [...new Set(right.filter((r) => left.includes(r)))];
        const formula = matches.length === 0 ? 0 : 2 ** (matches.length - 1);
        gTotal += formula;
        // console.log(`${i + 1} - ${iMatches.length} - ${input[idx + i + 1]} - ${gTotal}`);
    });
};

input.map(f);
console.log(map);
// input.map(g);

console.log(`Total: ${total}`);
// console.log(`gTotal: ${gTotal}`);

console.timeEnd("script");
