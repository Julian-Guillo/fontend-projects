var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameHasStarted = false;
var level = 1;
var gameOverSound = new Audio("sounds/wrong.mp3");

// Function to create a random color
function nextSequence() {
    // Generate random color and append it at the end of color array
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);

  // Update game header
  $("#level-title").text("Level " + level)
  level++;

  // Animate corresponding box
  var nextColorBox = $("#" + randomChosenColour);
  nextColorBox.fadeOut(100).fadeIn(100);

  // Play corresponding sound
  playSound(randomChosenColour);
}

// Create animation when user clicks on a box
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// Check wether the sequence clicked by the user is correct or not
function checkAnswer(currentLevel) {

  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function(){
      nextSequence();
    }, 1000);
      userClickedPattern = [];
    }

  } else {
    // Add red background, change title text to Game Over, reset game
    gameHasStarted = false;
    $("body").addClass("game-over");
    gameOverSound.play();
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over loser. Press any key to restart game");
  }
}

// Create sound depending on color
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// When user clicks a button
$(".btn").click(function(){
  // Avoid bugs when user clicks buttons without the game having started
  if(gameHasStarted){
    // Store colors selected by user when clicking
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    // Play corresponding sound
    playSound(userChosenColour);
    // Animate button
    animatePress(userChosenColour);
    // check if answer clicked by user is correct
    checkAnswer(userClickedPattern.length - 1);
  }
});

// Start/Restart the game when user presses any keypress
$(document).on("keypress", function(){
  if(!gameHasStarted){
    // Reset all variables before starting with first sequence
    gamePattern = [];
    userClickedPattern = [];
    level = 1;
    nextSequence();
    gameHasStarted = true;
  }
})
