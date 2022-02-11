const prompt = require('prompt');

let rounds = 5;
let answers = [];

function round1() {
  prompt.start();
  let card1 = Math.floor(Math.random() * 13 + 1);
  let card2 = Math.floor(Math.random() * 13 + 1);

  console.log(`Card 1: ${card1}`);
  console.log(`Card 2: ${card2}`);

  if (card1 != card2) {
    let card3 = Math.floor(Math.random() * 13 + 1);
    console.log('DEAL OR NO DEAL');
    prompt.get('offer', function (err,result) {
      if (err) {
        return onErr(err);
      }

      if ((result.offer == 'DEAL') && ((card3 >= card1 && card3 <= card2) || (card3 <= card1 && card3 >= card2))) {
        console.log(`Card 3: ${card3}`);
        console.log('PANALO KA')
      }
      else if ((result.offer == 'NO DEAL') && !((card3 >= card1 && card3 <= card2) || (card3 <= card1 && card3 >= card2))) {
        console.log(`Card 3: ${card3}`);
        console.log('PANALO KA')
      } else {
        console.log(`Card 3: ${card3}`);
        console.log('talo ka')
      }
    })
  }
}
round1();

