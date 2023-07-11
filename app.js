const num = 4324;
var lost = false;
var points = 0;

//create variable for numberMain and winLose
var numberMain = document.getElementById('numberMain');
var winLose = document.getElementById('winLose');

//stackoverflow number only for input fields in HTML code
function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

// Function to check if user's input matches the number
function checkInput() {
  var usersInput = document.getElementById('numUser').value;

  if (usersInput == num) {

    numberMain.innerHTML = "You gained a point!";
    winLose.innerHTML = "Points: " + points;

  } else {

    numberMain.innerHTML = "You lost!";
    lost = true;
    winLose.innerHTML = "Points: 0";
    points = 0;

  }
  setTimeout(playGame, 5000);
}

// Recursive function to play the game
function playGame() {
  if (lost) {
    numberMain.style.display = 'none';
    document.getElementById('userGuess').style.display = 'none';
    winLose.style.display = 'block';
  } else {
    numberMain.style.display = 'inline';
    document.getElementById('userGuess').style.display = 'block';
    winLose.style.display = 'none';
    setTimeout(function() { numberMain.style.display = 'none'; }, 5000);
    document.getElementById('submitBtn').addEventListener('click', checkInput);
  }
}

// Start the game
playGame();