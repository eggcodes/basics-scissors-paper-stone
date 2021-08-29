var main = function (userInput) {
  var programOutput = generateProgramOutput(); // GENERATE RANDOM COMPUTER OUTPUT: SCISSORS, PAPER, STONE
  if (!checkUserInputValidity(userInput)) {
    return `Please input "scissors", "paper" or "stone".`; // CHECK IF USER INPUT IS VALID; IF NOT, GENERATE ERROR MESSAGE.
  }

  // CHECK IF USER INPUT CONTAINS "reversed"; IF YES, GENERATE REVERSE OUTCOME. IF NO, GENERATE NORMAL OUTCOME.
  if (userInput.includes("reversed")) {
    var userOutcome = generateReversedResults(userInput, programOutput); // if yes, check if user win, lose or draw. and return outcome string. (reversed version)
  } else {
    userOutcome = generateNormalResults(userInput, programOutput); // if no, check if user win, lose or draw. and return outcome string. (normal version)
  }

  // GENERATE NICER INPUT: ADD EMOJIS, & REASSIGN VALUE
  userInput += addEmojis(userInput);
  programOutput += addEmojis(programOutput);

  // GENERATE OUTPUT MESSAGE ON WEBPAGE
  var myOutputValue = `The computer chose ${programOutput}. <br>
  You chose ${userInput}. <br><br>
  You ${userOutcome} <br><br>
  Now you can type "scissors", "paper" or "stone" to play another round!<br><br>
  <div> Easter Egg: try adding "reversed" in front of your input. E.g "reversed stone".`;
  return myOutputValue;
};

// HELPER FUNCTIONS BELOW: //

// GENERATE RANDOM COMPUTER OUTPUT: SCISSORS, PAPER, STONE
// generate a number from 0 to 2, to be used by computer to select output from array
var generateRandomNumber = function () {
  var randomDecimal = Math.random() * 3;
  return Math.floor(randomDecimal);
};
// generate computer output: randomly choose scissors, paper or stone
var generateProgramOutput = function () {
  const outputOptions = ["scissors", "paper", "stone"];
  return outputOptions[generateRandomNumber()];
};

// CHECK IF USER INPUT IS VALID
var checkUserInputValidity = function (userInput) {
  const inputOptions = [
    "scissors",
    "paper",
    "stone",
    "reversed scissors",
    "reversed paper",
    "reversed stone",
  ];
  // check if user input is one of array objects. if yes, return true. if no, return false.
  if (inputOptions.includes(userInput)) {
    return true;
  }
  return false;
};

// CHECK IF USER WIN OR LOSE
var checkIfUserWin = function (userInput, programOutput) {
  // if user wins, return true. if not, return false.
  if (
    (userInput.includes("scissors") && programOutput == "paper") ||
    (userInput.includes("paper") && programOutput == "stone") ||
    (userInput.includes("stone") && programOutput == "scissors")
  ) {
    return true;
  }
  return false;
};

// TO GENERATE OUTPUT MESSAGES WHEN USER WINS, LOSES OR DRAWS.
// #1: normal version
var generateNormalResults = function (userInput, programOutput) {
  if (checkIfUserWin(userInput, programOutput)) {
    return `win! Congrats.`; // if user wins, output message
  }
  if (!checkIfUserWin(userInput, programOutput)) {
    return `lose! Bummer.`; // if user loses, output message
  }
  return `draw. Try again?`; // if anything else (user draws), output message
};

// #2: reversed version
var generateReversedResults = function (userInput, programOutput) {
  if (generateNormalResults(userInput, programOutput) == "win! Congrats.") {
    return `lose! Bummer.`; // if user wins normally, reverse output message
  }
  if (generateNormalResults(userInput, programOutput) == "lose! Bummer.") {
    return `win! Congrats.`; // if user loses normally, reverse output message
  }
  return `draw. Try again?`; // if anything else (user draws), output message
};

// GENERATE NICER INPUT: ADD-ON EMOJIS
var addEmojis = function (input) {
  if (input.includes("scissors")) {
    return ` 🔪`; // if user input includes "scissors", return knife emoji
  }
  if (input.includes("paper")) {
    return ` 📄`; // if user input includes "paper", return paper
  }
  // if anything else ("stone"), return easter island emoji
  return ` 🗿`;
};
