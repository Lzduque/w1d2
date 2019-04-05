let input = process.argv.slice(2)[0]; // separate the in put from the rest

function rollDice(numOfTimes) {
  //figure out how to roll the dice - radom number between 1 and 6
  var allDices = ""; // the resultnumber from all dices
  for (var i = 0 ; i < numOfTimes ; i++) {
    var randomNum = Math.floor(Math.random() * (6 - 1)) + 1; // rolling the dice!
    // console.log(randomNum);
    if (i ===0) {
      allDices += randomNum; // first num cannot have commas ans space
    } else {
      allDices += ', ' + randomNum;
    }
  }
  return allDices;
}

console.log('Rolled ' + process.argv.slice(2)[0] + ' dice: ' + rollDice(input));