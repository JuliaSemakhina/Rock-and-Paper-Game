const choices = ['rock', 'paper', 'scissors'];

const buttons = document.querySelectorAll(".pick");
const scoreEl = document.getElementById("score");


let score = 0;
let userChoice = undefined;

buttons.forEach(button=>{
  button.addEventListener('click', ()=>{
      userChoice = button.getAttribute('data-choice');
      console.log(userChoice);
      checkWinner();
      console.log(pickRandomChoice());
  });
});

function checkWinner(){
  const computerChoice = pickRandomChoice();
  if(userChoice === computerChoice){
    //even
  }
  else if(userChoice === "paper" && computerChoice === "rock" ||
    userChoice === "rock" && computerChoice === "scissors" ||
    userChoice === "scissors" && computerChoice === "paper"){
    //user won
    updateScore(1)
  } else {
    //user lost
    updateScore(-1);
  }
}

function updateScore(value){
  score += value;

  scoreEl.innerText = score;
}


function pickRandomChoice(){
  return choices[Math.floor(Math.random() * choices.length)];
}
