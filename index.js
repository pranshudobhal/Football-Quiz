var readlineSync = require("readline-sync");

var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + "!!! \n");
console.log("Let's play How Well DO YOU KNOW FOOTBALL!!! \n");

var score = 0;

var highScores = [{
  name: "Pranshu",
  score: 2
}];

function quiz(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Correct!");
    score = score + 1;
  } else{
    console.log("Wrong!");
  }
  console.log("Current Score: " + score);
  console.log("-----------------");
}


var questions = [{
  question: "Which club has won the most Champions League titles? ",
  answer: "Real Madrid"
},
{
  question: "Who is the Champions League's top goalscorer of all time? ",
  answer: "Cristiano Ronaldo"
},
{
  question: "Which player scored the fastest hat-trick in the Premier League? ",
  answer: "Sadio Mane"
},
{
  question: "Which country has won the most World Cups? ",
  answer: "Brazil"
},
{
  question: "Which country has appeared in three World Cup finals, but never won the competition? ",
  answer: "Netherlands"
},
{
  question: "The record number of World Cup goals is 16, scored by who? ",
  answer: "Miroslav Klose"
},
{
  question: "In which World Cup did Diego Maradona score his infamous 'Hand of God' goal? ",
  answer: "1986"
},
{
  question: "It took Cristiano Ronaldo 27 games to score his first Champions League goal. ",
  answer: "True"
},
{
  question: "Frank Lampard has scored more Premier League goals than Thierry Henry, Robbie Fowler and Michael Owen. ",
  answer: "True"
},
{
  question: "Former Brazil and Barcelona star Ronaldinho spent time in prison after being found to have used a fake passport. ",
  answer: "True"
}
];


for(var i = 0; i<3;i++){
  var currentQuestion = questions[i];
  quiz(currentQuestion.question,currentQuestion.answer);
}

if(score === 3){
  console.log("\nCongratulations on passing Level 1!");
  console.log("---Time for Level 2!!---");
  for(var i = 3; i<7;i++){
    var currentQuestion = questions[i];
    quiz(currentQuestion.question,currentQuestion.answer);
  }
}

if(score === 7){
  console.log("\nCongratulations on passing Level 2!");
  console.log("\n---Time for the FINAL LEVEL!!!---")
  console.log("\nNote: Answer below in TRUE or FALSE \n");
  for(var i = 7; i<questions.length;i++){
    var currentQuestion = questions[i];
    quiz(currentQuestion.question,currentQuestion.answer);
  }
  console.log("\n\nYayy! You WON!!!");
}

console.log("\n You have scored: ", score);

if(score > highScores[0].score){
  console.log("You have beaten the highest score!!");
} else if(score === highScores[0].score){
  console.log("You are joint leader in scoredboard with " + highScores[0].name);
}


console.log("\n---Current Leaderboard---");
console.log("Name \t Score");
for(var i=0;i<highScores.length;i++){
  console.log(highScores[i].name + " \t " + highScores[i].score);
}