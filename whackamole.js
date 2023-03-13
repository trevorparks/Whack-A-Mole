// added DOMContentLoaded to wait for the HTML to load, as it was throwing errors.
document.addEventListener("DOMContentLoaded", function(event) {

    //initalize global variables and added an event listener to start the game on click.
const grid = document.querySelector(".wrapper");
const background = document.querySelector(".mole-hole");
const startBtn = document.getElementById("start-button").addEventListener("click", startGame);
const score = document.querySelector("#score");
let scoreCount = 0;
score.innerText = scoreCount;

// function ran by clicking the start button
function startGame(e){
    
// set interval ran for the timer function, which is counting down from 10 seconds.
let timer = 10;
let counter = setInterval(() => {
    if(timer > 0){
  document.getElementById("timeLeft").innerText = timer;
  timer--; }
// clears interval of timer and divColor functions and exits the function with return
  else {
    clearInterval(counter);
    clearInterval(divColor); 
    return;
  }
// timer counts down by seconds or 1000 ms
}, 1000);

// setInterval that defines where the mole will be every second that the game is played. Mole location and color is random.
let divColor = setInterval(() => {
    const randomColor = () => Math.floor(Math.random() * 256);

    const moleLocation = ["hole-1", "hole-2", "hole-3", "hole-4", "hole-5", "hole-6"];
    const randomNum = Math.floor(Math.random() * 6);
    let body = document.getElementById(moleLocation[randomNum]);
    body.style.backgroundColor = 
    `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    body.classList.add("mole");


    setTimeout(() => {
        body.style.backgroundColor = "red";
    }, 1000);

  }, 2000);

  // Event listener to the grid variable which leads into the function that tabulates the score feature. When a user
  // clicks the div while it has a random color, the user gains 1 point.
grid.addEventListener("click", (e) => {
    if (e.target.classList.contains("mole")) {
        e.target.classList.remove("mole");
        scoreCount++;
        score.innerText = scoreCount;
      }
// The score is reset to 0 once time runs out, and the interval is cleared.
      else if (timer === 0) {
        scoreCount = 0;
        clearInterval(grid, scoreCount, score, "mole");
      }
    
});
}
});