console.time("script");

const { readInput } = require("../readInput");
const input = readInput("day3").split("\n");

const symbols = [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "`",
    ",",
    "<",
    ">",
    "\\",
    "|",
];
let total = 0;

const pattern = /[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/g;

for (let i = 0; i < input.length; i++) {
    // const symbols = [ ...input[i].matchAll(pattern) ]
    const symbols = Array(...input[i].matchAll(pattern));

    const captures = symbols.map((x) => [x[0], x.index]);

    console.log(captures);

    // const matches = input[i].matchAll(/\d+/g);

    // for (const m of matches) {
    //     const v = Number(m[0])
    //     const length = m[0].length
    //     const fRange = [ m.index + length, m.index + length + 1 ]
    //     const bRange = [ m.index - 1, m.index ]

    //     const nextForwardMatches = i === input.length - 1 ? "" : input[i + 1].substring(m.index, fRange[1])
    //     const nextBackMatches = i === input.length - 1 ? "" : input[i + 1].substring(bRange[0], m.index + length)

    //     const prevForwardMatches = i === 0 ? "" : input[i - 1].substring(m.index, fRange[1])
    //     const prevBackMatches = i === 0 ? "" : input[i - 1].substring(bRange[0]. m.index + length)

    //     const captures = [
    //         input[i].substring(fRange[0], fRange[1]),
    //         input[i].substring(bRange[0], bRange[1]),
    //         nextForwardMatches,
    //         nextBackMatches,
    //         prevForwardMatches,
    //         prevBackMatches
    //     ];

    //     console.log(captures)
    // }
}

console.timeEnd("script");
