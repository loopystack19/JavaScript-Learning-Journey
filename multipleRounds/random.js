// Question (Harder):
// Extend your dice game so that:

// The game runs for 5 rounds.

// In each round, roll two dice and print both dice values plus their sum.

// Keep track of the number of wins (sum = 7 or 11) and losses (any other sum).

// After 5 rounds, print the total wins and losses.

// Finally, print "Overall Winner!" if wins > losses, otherwise "Better luck next time!".

var track = [];

for (let i = 0; i < 5; i++) {
  let firstDice = Math.floor(Math.random() * 6) + 1;

  let secondDice = Math.floor(Math.random() * 6) + 1;

  let sum = firstDice + secondDice;

  if (sum === 7 || sum === 11) {
    track.push("win");
  } else {
    track.push("lose");
  }
}

let wins = 0;

let lose = 0;

for (let j = 0; j < track.length; j++) {
  if (track[j] === "win") {
    wins++;
  } else {
    lose++;
  }
}

console.log(track);

if(wins>lose){

    console.log("Overall winner");
}else{

    console.log("Better luck next time");
}
