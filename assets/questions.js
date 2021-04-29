//Here is JavaScript for storage of questions I selected, you can mess with these here to make it your own or add on to what's already here.
const questions = [
  {
    question: "What game came bundled with the first Nintendo Game Boy in America?",
    optionA: "Baseball",
    optionB: "Super Mario Land",
    optionC: "Tennis",
    optionD: "Tetris",
    correctOption: "optionD",
  },

  {
    question: "In the original Oregon Trail game made in 1971, which one was an infectious disease that can kill members of your party?",
    optionA: "Cholera",
    optionB: "Dysuria",
    optionC: "Mania",
    optionD: "Trench Mouth",
    correctOption: "optionA",
  },

  {
    question: "Who made popular the game known as Bingo in the United States?",
    optionA: "Carl Leffler",
    optionB: "Edwin Lowe",
    optionC: "John Orchard",
    optionD: "Hugh Ward",
    correctOption: "optionB",
  },

  {
    question: "How many balls are normally racked inside the triangle in a game of billiards?",
    optionA: "1",
    optionB: "8",
    optionC: "15",
    optionD: "24",
    correctOption: "optionC",
  },

  {
    question: "In a traditional deck of cards, which King is the only one without a moustache?",
    optionA: "King of Clubs",
    optionB: "King of Diamonds",
    optionC: "King of Hearts",
    optionD: "King of Spades",
    correctOption: "optionC",
  },

  {
    question: "What colors are the original Rock-em Sock-em Robots?",
    optionA: "Green & Purple",
    optionB: "Orange & Hot Pink",
    optionC: "Red & Blue",
    optionD: "Yellow & Rose",
    correctOption: "optionC",
  },

  {
    question: "How many Yahtzee bonus boxes are on a Yahtzee score card?",
    optionA: "1",
    optionB: "2",
    optionC: "3",
    optionD: "4",
    correctOption: "optionC",
  },

  {
    question: "What video game character was originally known as Jumpman?",
    optionA: "Bowser",
    optionB: "Luigi",
    optionC: "Mario",
    optionD: "Toad",
    correctOption: "optionC",
  },

  {
    question: "In Battleship, how many hits does it take to sink an aircraft carrier?",
    optionA: "2",
    optionB: "3",
    optionC: "4",
    optionD: "5",
    correctOption: "optionD",
  },

  {
    question: "How much money do you start with in a regular game of Monopoly?",
    optionA: "$500",
    optionB: "$1000",
    optionC: "$1500",
    optionD: "$2000",
    correctOption: "optionC",
  },

  {
    question: "For which game was the Steam Workshop service created to allow players to share modifications?",
    optionA: "Diablo",
    optionB: "Halo",
    optionC: "Minecraft",
    optionD: "Team Fortress 2",
    correctOption: "optionD",
  },

  {
    question: "What game introduced Raiden, Liu Kang & Sub-Zero?",
    optionA: "Killer Instinct",
    optionB: "Mortal Kombat",
    optionC: "Power Stone",
    optionD: "Street Fighter",
    correctOption: "optionB",
  },

  {
    question: "How many cards are usually used in a game of Solitaire?",
    optionA: "28",
    optionB: "40",
    optionC: "52",
    optionD: "64",
    correctOption: "optionC",
  },

  {
    question: "Which horror game is known for drawings involving ink?",
    optionA: "Bendy & the Ink Machine",
    optionB: "Five Nights at Freddy",
    optionC: "Resident Evil",
    optionD: "Silent Hill",
    correctOption: "optionA",
  },

  {
    question: "Which Mario Kart was the first to feature 12 racers instead of 8?",
    optionA: "Mario Kart DS",
    optionB: "Mario Kart 64",
    optionC: "Mario Kart Super Circuit",
    optionD: "Mario Kart Wii",
    correctOption: "optionD",
  },

  {
    question: "Which Poker hand is the strongest?",
    optionA: "Aces Up",
    optionB: "3 of a kind",
    optionC: "Royal Flush",
    optionD: "Straight Flush",
    correctOption: "optionC",
  },

  {
    question: "What chess piece was originally called the elephant?",
    optionA: "Bishop",
    optionB: "Knight",
    optionC: "Pawn",
    optionD: "Rook",
    correctOption: "optionA",
  },

  {
    question: "What does NPC mean in a video game?",
    optionA: "Nest Perch Canary",
    optionB: "Nice Pie Chart",
    optionC: "Non Playable Character",
    optionD: "Nut Post Cereal",
    correctOption: "optionC",
  },

  {
    question: "Which player was called the first victim of the Madden Curse in 1999 due to his sudden retirement?",
    optionA: "Eddie Murray",
    optionB: "Rashaan Salaam",
    optionC: "Barry Sanders",
    optionD: "Charles Wilson",
    correctOption: "optionC",
  },

  {
    question: "In a game of Scrabble, what is the total point value of all the tiles?",
    optionA: "127",
    optionB: "147",
    optionC: "167",
    optionD: "187",
    correctOption: "optionD",
  },

  {
    question: "Which fruit can restore your health in Donkey Kong 64?",
    optionA: "Avocado",
    optionB: "Coconut",
    optionC: "Mango",
    optionD: "Watermelon",
    correctOption: "optionD",
  },

  {
    question: "Which Nintendo console was released after the N64 but before the Wii?",
    optionA: "Game Boy Advance",
    optionB: "Game Boy",
    optionC: "GameCube",
    optionD: "Super Nintendo",
    correctOption: "optionC",
  },

  {
    question: "How many different pieces are there in Tetris?",
    optionA: "3",
    optionB: "5",
    optionC: "7",
    optionD: "9",
    correctOption: "optionC",
  },

  {
    question: "What was the first mass produced game to use people as playing pieces?",
    optionA: "Hungry Hungry Hippos",
    optionB: "Mouse Trap",
    optionC: "Sorry",
    optionD: "Twister",
    correctOption: "optionD",
  },

  {
    question: "Which game will celebrate its 40th anniversary on July 9th 2021?",
    optionA: "Donkey Kong",
    optionB: "Kid Icarus",
    optionC: "Outrun",
    optionD: "Super Metroid",
    correctOption: "optionA",
  },

  {
    question: "Which of these consoles did Nintendo release in 2017?",
    optionA: "Nintendo 2DS",
    optionB: "Nintendo Switch",
    optionC: "Nintendo 3DS",
    optionD: "Nintendo Wii U",
    correctOption: "optionB",
  },

  {
    question: "What material is the game Cat's Cradle played with?",
    optionA: "Paper",
    optionB: "Plastic",
    optionC: "String",
    optionD: "Wood",
    correctOption: "optionC",
  },

  {
    question: "What was the first game to be released under the Games for Windows label?",
    optionA: "Age of Empires 3",
    optionB: "Company of Heroes",
    optionC: "Lego Star Wars 2",
    optionD: "Microsoft Flight Simulator X",
    correctOption: "optionB",
  },

  {
    question: "How many individual little squares are there in a standard Rubik's Cube?",
    optionA: "18",
    optionB: "30",
    optionC: "42",
    optionD: "54",
    correctOption: "optionD",
  },

  {
    question: "How many holes are in a standard Chinese checkers board?",
    optionA: "101",
    optionB: "121",
    optionC: "141",
    optionD: "161",
    correctOption: "optionB",
  },
];

//This array is empty to hold shuffled selected questions out of questions available.
let shuffledQuestions = [];

//This function shuffles and selects 10 questions per session to shuffledQuestions array.
function handleQuestions() {
  while (shuffledQuestions.length <= 9) {
    const random = questions[Math.floor(Math.random() * questions.length)];
    if (!shuffledQuestions.includes(random)) {
      shuffledQuestions.push(random);
    }
  }
}

//This shows current question number.
let questionNumber = 1;

//This shows player score.
let playerScore = 0;

//This shows how many wrong answers picked by player.
let wrongAttempt = 0;

//This is used in displaying next question.
let indexNumber = 0;

// This function displays the next question in array  while also handling the display of player(s) and quiz information to dom.
function NextQuestion(index) {
  handleQuestions();
  const currentQuestion = shuffledQuestions[index];
  document.getElementById("question-number").innerHTML = questionNumber;
  document.getElementById("player-score").innerHTML = playerScore;
  document.getElementById("display-question").innerHTML =
    currentQuestion.question;
  document.getElementById("option-one-label").innerHTML =
    currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML =
    currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML =
    currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML =
    currentQuestion.optionD;
}

//This function checks for current question, it's answer & determines if it's correct.
function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber];
  const currentQuestionAnswer = currentQuestion.correctOption;
  const options = document.getElementsByName("option");
  let correctOption = null;

  options.forEach((option) => {
    if (option.value === currentQuestionAnswer) {
      correctOption = option.labels[0].id;
    }
  });

//This if statement checks for an option being selected.
  if (
    options[0].checked === false &&
    options[1].checked === false &&
    options[2].checked === false &&
    options[3].checked == false
  ) {
    document.getElementById("option-modal").style.display = "flex";
  }

//This if/else statement checks if answer is correct, then score is increased, or if incorrect, then tallies wrong attempts instead & moves on to next question.
  options.forEach((option) => {
    if (option.checked === true && option.value === currentQuestionAnswer) {
      document.getElementById(correctOption).style.backgroundColor = "green";
      playerScore++;
      indexNumber++;
      
//set to delay question number till when next question loads
      setTimeout(() => {
        questionNumber++;
      }, 1000);
    
    } else if (option.checked && option.value !== currentQuestionAnswer) {
      const wrongLabelId = option.labels[0].id;
      document.getElementById(wrongLabelId).style.backgroundColor = "red";
      document.getElementById(correctOption).style.backgroundColor = "green";
      wrongAttempt++;
      indexNumber++;
      
      //see line 347
      setTimeout(() => {
        questionNumber++;
      }, 1000);
    }
  });
}

//This function is called when the next button is clicked on, checks for answer & delays until next question is selected from shuffledQuestions array
function handleNextQuestion() {
  checkForAnswer();
  unCheckRadioButtons();
  setTimeout(() => {
    
//This if/else statement checks for index number to be not greater than 9, otherwise the game ends.    
    if (indexNumber <= 9) {
      NextQuestion(indexNumber);
    } else {
      handleEndGame();
    }
    resetOptionBackground();
  }, 1000);
}

//This function resets options background color after you answer a question.
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
    document.getElementById(option.labels[0].id).style.backgroundColor = "";
  });
}

//This function unchecks all the buttons for next question.
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}

//This function activates when all questions have been answered
function handleEndGame() {
  let remark = null;
  let remarkColor = null;

//This if/else statement checks for how many correct answers player selected and remarks on amount of correct answers.
  if (playerScore <= 3) {
    remark = "Don't be discouraged. Give it another go.";
    remarkColor = "red";
  } else if (playerScore >= 4 && playerScore < 7) {
    remark = "Got a good feeling on next attempt.";
    remarkColor = "orange";
  } else if (playerScore >= 7) {
    remark = "Well done. Knew you could do it.";
    remarkColor = "green";
  }
  const playerGrade = (playerScore / 10) * 100;

//This data is for displaying scoreboard information.
  document.getElementById("remarks").innerHTML = remark;
  document.getElementById("remarks").style.color = remarkColor;
  document.getElementById("grade-percentage").innerHTML = playerGrade;
  document.getElementById("wrong-answers").innerHTML = wrongAttempt;
  document.getElementById("right-answers").innerHTML = playerScore;
  document.getElementById("score-modal").style.display = "flex";
}

//This function closes score modal, resets game and reshuffles questions.
function closeScoreModal() {
  questionNumber = 1;
  playerScore = 0;
  wrongAttempt = 0;
  indexNumber = 0;
  shuffledQuestions = [];
  NextQuestion(indexNumber);
  document.getElementById("score-modal").style.display = "none";
}

//This function closes warning modal.
function closeOptionModal() {
  document.getElementById("option-modal").style.display = "none";
}