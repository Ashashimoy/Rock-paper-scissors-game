const userscore = 0;
const computerscore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelectorAll(".score-board");
const result_Div = document.querySelector(".result");
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")


function getComputerChoice() {
  const choices = ['r','p','s'];
  const randomNumber =(Math.floor(Math.random()* 3));
  return choices[randomNumber];
  
}
console.log(getComputerChoice());

function game(userChoice) {

}

function main() {
  rock_div.addEventListener('click',function(){
    game("r");

})

  paper_div.addEventListener('click',function(){
    game("p");
 
 })

   scissors_div.addEventListener('click',function(){
     game("s");
 
 })
}
 main();