const fs = require("fs");
const path = require("path");

const readInput = (folderName) =>
    fs.readFileSync(path.join(__dirname, folderName, "input.txt"), {
        encoding: "utf8",
    });

module.exports = {
    readInput,
};
