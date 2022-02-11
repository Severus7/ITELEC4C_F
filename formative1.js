const prompt = require('prompt');

let rounds = 5;
let score = 0;

function commence() {
  prompt.start();
  let card1 = Math.floor(Math.random() * 13 + 1);
  let card2 = Math.floor(Math.random() * 13 + 1);
  let card3 = Math.floor(Math.random() * 13 + 1);

  console.log(`Card 1: ${card1}`);
  console.log(`Card 2: ${card2}`);

  if (card1 != card2) {
    console.log('DEAL OR NO DEAL');
    prompt.get('offer', function (err, result) {
      if (err) {
        return onErr(err);
      }

      if ((result.offer == 'DEAL') && ((card3 >= card1 && card3 <= card2) || (card3 <= card1 && card3 >= card2))) {
        console.log(`Card 3: ${card3}`);
        console.log('PANALO KA')
        score++;
        round2()
      }
      else if ((result.offer == 'NO DEAL') && !((card3 >= card1 && card3 <= card2) || (card3 <= card1 && card3 >= card2))) {
        console.log(`Card 3: ${card3}`);
        console.log('PANALO KA');
        score++;
        round2();
      } else {
        console.log(`Card 3: ${card3}`);
        console.log('talo ka')
        round2()
      }
    })
  }
  else if (card1 === card2) {
    console.log("HIGHER or LOWER");
    prompt.get("offer", function (err, result) {
      if (err) {
        return onErr(err);
      }

      if (result.offer == "HIGHER" && card3 > card1) {
        console.log(`Card 3: ${card3}`);
        console.log("PANALO KA");
        score++;
        round2()
      } else if (result.offer == "LOWER" && card3 < card1) {
        console.log(`Card 3: ${card3}`);
        console.log("PANALO KA");
        score++;
        round2()
      } else {
        console.log(`Card 3: ${card3}`);
        console.log("Talo ka!");
        round2()
      }
    });
  }  
}

function round2() {
  prompt.start();
  let card1 = Math.floor(Math.random() * 13 + 1);
  let card2 = Math.floor(Math.random() * 13 + 1);
  let card3 = Math.floor(Math.random() * 13 + 1);

  console.log(`Card 1: ${card1}`);
  console.log(`Card 2: ${card2}`);

  if (card1 != card2) {
    console.log('DEAL OR NO DEAL');
    prompt.get('offer', function (err, result) {
      if (err) {
        return onErr(err);
      }

      if ((result.offer == 'DEAL') && ((card3 >= card1 && card3 <= card2) || (card3 <= card1 && card3 >= card2))) {
        console.log(`Card 3: ${card3}`);
        console.log('PANALO KA')
        score++;
        round3()
      }
      else if ((result.offer == 'NO DEAL') && !((card3 >= card1 && card3 <= card2) || (card3 <= card1 && card3 >= card2))) {
        console.log(`Card 3: ${card3}`);
        console.log('PANALO KA')
        score++;
        round3()
      } else {
        console.log(`Card 3: ${card3}`);
        console.log('talo ka')
        round3()
      }
    })
  }
  else if (card1 === card2) {
    console.log("HIGHER or LOWER");
    prompt.get("offer", function (err, result) {
      if (err) {
        return onErr(err);
      }

      if (result.offer == "HIGHER" && card3 > card1) {
        console.log(`Card 3: ${card3}`);
        console.log("PANALO KA");
        score++;
        round3()
      } else if (result.offer == "LOWER" && card3 < card1) {
        console.log(`Card 3: ${card3}`);
        console.log("PANALO KA");
        score++;
        round3()
      } else {
        console.log(`Card 3: ${card3}`);
        console.log("Talo ka!");
        round3()
      }
    });
  }  
}

function round3() {
  prompt.start();
  let card1 = Math.floor(Math.random() * 13 + 1);
  let card2 = Math.floor(Math.random() * 13 + 1);
  let card3 = Math.floor(Math.random() * 13 + 1);

  console.log(`Card 1: ${card1}`);
  console.log(`Card 2: ${card2}`);

  if (card1 != card2) {
    console.log('DEAL OR NO DEAL');
    prompt.get('offer', function (err, result) {
      if (err) {
        return onErr(err);
      }

      if ((result.offer == 'DEAL') && ((card3 >= card1 && card3 <= card2) || (card3 <= card1 && card3 >= card2))) {
        console.log(`Card 3: ${card3}`);
        console.log('PANALO KA')
        score++;
        round4()
      }
      else if ((result.offer == 'NO DEAL') && !((card3 >= card1 && card3 <= card2) || (card3 <= card1 && card3 >= card2))) {
        console.log(`Card 3: ${card3}`);
        console.log('PANALO KA')
        score++;
        round4()
      } else {
        console.log(`Card 3: ${card3}`);
        console.log('talo ka')
        round4()
      }
    })
  }
  else if (card1 === card2) {
    console.log("HIGHER or LOWER");
    prompt.get("offer", function (err, result) {
      if (err) {
        return onErr(err);
      }

      if (result.offer == "HIGHER" && card3 > card1) {
        console.log(`Card 3: ${card3}`);
        console.log("PANALO KA");
        score++;
        round4()
      } else if (result.offer == "LOWER" && card3 < card1) {
        console.log(`Card 3: ${card3}`);
        console.log("PANALO KA");
        score++;
        round4()
      } else {
        console.log(`Card 3: ${card3}`);
        console.log("Talo ka!");
        round4()
      }
    });
  }  
}

function round4() {
  prompt.start();
  let card1 = Math.floor(Math.random() * 13 + 1);
  let card2 = Math.floor(Math.random() * 13 + 1);
  let card3 = Math.floor(Math.random() * 13 + 1);

  console.log(`Card 1: ${card1}`);
  console.log(`Card 2: ${card2}`);

  if (card1 != card2) {
    console.log('DEAL OR NO DEAL');
    prompt.get('offer', function (err, result) {
      if (err) {
        return onErr(err);
      }

      if ((result.offer == 'DEAL') && ((card3 >= card1 && card3 <= card2) || (card3 <= card1 && card3 >= card2))) {
        console.log(`Card 3: ${card3}`);
        console.log('PANALO KA')
        score++;
        round5()
      }
      else if ((result.offer == 'NO DEAL') && !((card3 >= card1 && card3 <= card2) || (card3 <= card1 && card3 >= card2))) {
        console.log(`Card 3: ${card3}`);
        console.log('PANALO KA')
        score++;
        round5()
      } else {
        console.log(`Card 3: ${card3}`);
        console.log('talo ka')
        round5()
      }
    })
  }
  else if (card1 === card2) {
    console.log("HIGHER or LOWER");
    prompt.get("offer", function (err, result) {
      if (err) {
        return onErr(err);
      }

      if (result.offer == "HIGHER" && card3 > card1) {
        console.log(`Card 3: ${card3}`);
        console.log("PANALO KA");
        score++;
        round5()
      } else if (result.offer == "LOWER" && card3 < card1) {
        console.log(`Card 3: ${card3}`);
        console.log("PANALO KA");
        score++;
        round5()
      } else {
        console.log(`Card 3: ${card3}`);
        console.log("Talo ka!");
        round5()
      }
    });
  }  
}

function round5() {
  prompt.start();
  let card1 = Math.floor(Math.random() * 13 + 1);
  let card2 = Math.floor(Math.random() * 13 + 1);
  let card3 = Math.floor(Math.random() * 13 + 1);

  console.log(`Card 1: ${card1}`);
  console.log(`Card 2: ${card2}`);

  if (card1 != card2) {
    console.log('DEAL OR NO DEAL');
    prompt.get('offer', function (err, result) {
      if (err) {
        return onErr(err);
      }

      if ((result.offer == 'DEAL') && ((card3 >= card1 && card3 <= card2) || (card3 <= card1 && card3 >= card2))) {
        console.log(`Card 3: ${card3}`);
        console.log('PANALO KA')
        score++;
        console.log('Total Points: ' + score)
      }
      else if ((result.offer == 'NO DEAL') && !((card3 >= card1 && card3 <= card2) || (card3 <= card1 && card3 >= card2))) {
        console.log(`Card 3: ${card3}`);
        console.log('PANALO KA')
        score++;
        console.log('Total Points: ' + score)
      } else {
        console.log(`Card 3: ${card3}`);
        console.log('talo ka')
        console.log('Total Points: ' + score)
      }
    })
  }
  else if (card1 === card2) {
    console.log("HIGHER or LOWER");
    prompt.get("offer", function (err, result) {
      if (err) {
        return onErr(err);
      }

      if (result.offer == "HIGHER" && card3 > card1) {
        console.log(`Card 3: ${card3}`);
        console.log("PANALO KA");
        score++;
        console.log('Total Points: ' + score)
      } else if (result.offer == "LOWER" && card3 < card1) {
        console.log(`Card 3: ${card3}`);
        console.log("PANALO KA");
        score++;
        console.log('Total Points: ' + score)
      } else {
        console.log(`Card 3: ${card3}`);
        console.log("Talo ka!");
        console.log('Total Points: ' + score)
      }
    });
  }  
}


commence();

