const choices = ['rock', 'paper', 'scissors'];

console.log(pickRandomChoice())

function pickRandomChoice(){
  return choices[Math.floor(Math.random() * choices.length)];
}