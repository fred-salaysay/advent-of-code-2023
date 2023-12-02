console.time("script");

const { readInput } = require("../readInput");
const input = readInput("day2").split("\n");

const map = {
    red: 12,
    green: 13,
    blue: 14,
};

const parse = (ref) => {
    const [game, result] = ref.split(": ");
    const id = Number(game.substring(5));
    return { id, result };
};

const parseScore = (splitString) => Number(splitString[0]);

let total = 0;
const pContainer = [];

for (const line of input) {
    const { id, result: gameResults } = parse(line);
    let over = false;
    const res = gameResults.split("; ").flatMap((x) => x.trim().split(", "));

    for (const x of res) {
        const s = x.split(" ");
        const score = parseScore(s);

        if (score > map[s[1]]) {
            over = true;
            break;
        }
    }

    if (!over) total += id;

    const cubes = res.reduce(
        (acc, v) => {
            const s = v.split(" ");
            const score = parseScore(s);
            acc[s[1]] = Math.max(acc[s[1]] || 0, score);
            return acc;
        },
        { red: 0, green: 0, blue: 0 },
    );

    pContainer.push(Object.values(cubes).reduce((acc, v) => acc * v, 1));
}

const tPower = pContainer.reduceRight((acc, v) => acc + v);

console.table([total, tPower]);
console.timeEnd("script");
