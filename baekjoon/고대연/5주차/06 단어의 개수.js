let input = require('fs').readFileSync('../input.txt').toString().trim().split(" ");
console.log(input[0] === "" ? 0 : input.length)

