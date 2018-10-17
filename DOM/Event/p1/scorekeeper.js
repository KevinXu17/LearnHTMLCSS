var p1Score = 0;
var p2Score = 0;
var p1display = document.querySelector("#p1Display");
var p2display = document.getElementById("p2Display");
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input[type='number']");
var winningScoreDisply = document.querySelector("p span");
var gameOver = false;
var finalGoal = 5;
p1Button.addEventListener("click", function() {
  if (!gameOver){
  p1Score++;
  p1display.textContent = p1Score;
  if (p1Score === finalGoal) {
    gameOver = true;
    p1display.classList.add("winner");
  }
}
});
p2Button.addEventListener("click", function() {
  if (!gameOver){
    p2Score++;
    p2display.textContent = p2Score;
    if (p2Score === finalGoal) {
      gameOver = true;
      p2display.classList.toggle("winner");
    }
  }
});
resetButton.addEventListener("click", reset);
function reset() {
    p1Score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p2Score = 0;
    gameOver = false;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
}
numInput.addEventListener("change", function() {
  winningScoreDisply.textContent = this.value;
  finalGoal = Number(this.value);
  reset();
});
