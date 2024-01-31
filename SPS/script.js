/*How many hours did you spend on this assignment?: On and off estimated 5-6 hours.

What part of the assignment did you spend the most time on?: Adding reversed mode (Ongoing)

How comfortable did you feel with this assignment? (1-5): 3

Is there anything in this code that you feel pleased about?: No 

What's one aspect of your code you would like specific, elaborate feedback on?: */

//Computerised Scissors Paper Stone
//Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors,
//paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.
//Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
var NumberOfWins = 0;
var NumberOfLoss = 0;
var NumberOfDraws = 0;
var username = "";

var main = function (input) {
  var userinput = input;
  if (username == "") {
    username = userinput;
    input = "";
    return `welcome ${username} please enter ROCK , PAPER or SCISSORS or reverse .`;
  }

  var CC = randomnumber();
  console.log("number", CC);

  if (input == "reverse") {
    return " you have entered reversed ";
  }

  if (
    input == "PAPER" ||
    input == "ROCK" ||
    input == "SCISSORS" ||
    input == "reverse"
  ) {
  }
  if (input == CC) {
    NumberOfDraws = NumberOfDraws + 1;
    return `Hi ${username} <br> you have selected ${input} and Computer as selected ${CC} <br><br> its a draw ! <br><br> Draw Counts : ${NumberOfDraws}`;
  }
  if (
    (input == "SCISSORS" && CC == "PAPER") ||
    (input == "PAPER" && CC == "ROCK") ||
    (input == "ROCK" && CC == "SCISSORS")
  ) {
    NumberOfWins = NumberOfWins + 1;
    MyOutputValue = `Congratulation you won ${username} <br><br> You Have Selected ${input} <br><br> PC has selected ${CC}! <br><br> Win Counts : ${NumberOfWins}`;
  }
  if (
    (input == "SCISSORS" && CC == "ROCK") ||
    (input == "PAPER" && CC == "SCISSORS") ||
    (input == "ROCK" && CC == "PAPER")
  ) {
    NumberOfLoss = NumberOfLoss + 1;
    MyOutputValue = `Sorry You Lost ${username} ! <br><br> You have selected ${input} <br><br> PC has selected ${CC}! <br><br>Lose Counts: ${NumberOfLoss}`;
  }
  return MyOutputValue;
};
var randomnumber = function () {
  var randomgen = Math.random() * 3;
  var randomint = Math.floor(randomgen);
  var choice = randomint;
  if (choice == 0) {
    return "PAPER";
  }
  if (choice == 1) {
    return "ROCK";
  }
  if (choice == 2) {
    return "SCISSORS";
  }
};
