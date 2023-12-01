console.time("script");

const { readInput } = require("../readInput");
const input = readInput("day1").split("\n");

let total = 0;

const intMap = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
};

const cont = [];

for (let i = 0; i < input.length; i++) {
    const element = input[i].split("").filter(Number);
    total += Number(`${element[0]}${element[element.length - 1]}`);

    const keys = Object.keys(intMap);

    const ints = input[i]
        .split("")
        .map((v, i) => [Number(v), i])
        .filter((v) => Number(v[0]));

    for (let x = 0; x < keys.length; x++) {
        if (input[i].indexOf(keys[x]) !== -1) {
            const iIndex = input[i].indexOf([keys[x]]);
            const fIndex = input[i].lastIndexOf(keys[x]);
            if (iIndex !== fIndex && fIndex !== -1) {
                ints.push([intMap[keys[x]], iIndex]);
                ints.push([intMap[keys[x]], fIndex]);
            } else {
                ints.push([intMap[keys[x]], iIndex]);
            }
        }
    }

    const res = ints.sort((a, b) => (a[1] > b[1] ? 1 : -1));
    cont.push(
        Number(`${res[0][0].toString()}${res[res.length - 1][0].toString()}`),
    );
}

const gTotal = cont.reduceRight((acc, v) => (acc += v));

console.table([total, gTotal]);
console.timeEnd("script");
