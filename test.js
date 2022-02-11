const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name ? ', function (name) {
  rl.question('Where do you live ? ', function (country) {
    console.log(`${name}, is a citizen of ${country}`);
    rl.close();
  });
});

rl.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});

let card1 = Math.floor(Math.random() * 13 + 1);
let card2 = Math.floor(Math.random() * 13 + 1);
let card3 = Math.floor(Math.random() * 13 + 1);

console.log(`Card 1: ${card1}`);
console.log(`Card 2: ${card2}`);
console.log(`Card 3: ${card3}`);

const deal = "DEAL";
const higher = "HIGHER";
const lower = "LOWER";

// For checking purposes only
if ((card3 >= card1 && card3 <= card2) || (card3 <= card1 && card3 >= card2)) {
  console.log("IN-BETWEEN");
} else {
  console.log("NOT");
}

