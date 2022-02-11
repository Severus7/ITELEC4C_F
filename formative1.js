const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let card1 = Math.floor(Math.random() * 13 + 1);
let card2 = Math.floor(Math.random() * 13 + 1);
let card3 = Math.floor(Math.random() * 13 + 1);
