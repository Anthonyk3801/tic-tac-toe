//array for each grid item
const ticTacToeGrid = [
  {empty: true,
    value: 'none'},
  {empty: true,
    value: 'none'},
  {empty: true,
    value: 'none'},
  {empty: true,
    value: 'none'},
  {empty: true,
    value: 'none'},
  {empty: true,
    value: 'none'},
  {empty: true,
    value: 'none'},
  {empty: true,
    value: 'none'},
  {empty: true,
    value: 'none'}
];

function start() {
  let rsymbol = Math.random();
  if(rsymbol > 0.5) {
    addX();
  }else {
    addO();
  }
}

//pull all elements from html
const grid = document.querySelector('.TTT-grid');
const gridCells = Array.from(document.querySelectorAll('.spot'));
const infoText = document.querySelector('p');
const resetButton = document.querySelector('#restartGame');

//variable to stop the game
let stopGame = false;

//variables for x or o winning, or a draw
let xWon = false;
let oWon = false;
let draw = false;

//tell the person if x's or o's won
function checkWin(){
  if (ticTacToeGrid[0].value == 'x' && ticTacToeGrid[1].value == 'x' && ticTacToeGrid[2].value == 'x') {
    infoText.textContent = 'X wins';
    stopGame = true;
    xWon = true;
  }else if
    (ticTacToeGrid[3].value == 'x' && ticTacToeGrid[4].value == 'x' && ticTacToeGrid[5].value == 'x'){
    infoText.textContent = 'X wins';
    stopGame = true;
    xWon = true;
  }else if
    (ticTacToeGrid[6].value == 'x' && ticTacToeGrid[7].value == 'x' && ticTacToeGrid[8].value == 'x'){
    infoText.textContent = 'X wins';
    stopGame = true;
    xWon = true;
  }else if
    (ticTacToeGrid[0].value == 'x' && ticTacToeGrid[3].value == 'x' && ticTacToeGrid[6].value == 'x'){
    infoText.textContent = 'X wins';
    stopGame = true;
    xWon = true;
  }else if
    (ticTacToeGrid[1].value == 'x' && ticTacToeGrid[4].value == 'x' && ticTacToeGrid[7].value == 'x'){
    infoText.textContent = 'X wins';
    stopGame = true;
    xWon = true;
  }else if
    (ticTacToeGrid[2].value == 'x' && ticTacToeGrid[5].value == 'x' && ticTacToeGrid[8].value == 'x'){
    infoText.textContent = 'X wins';
    stopGame = true;
    xWon = true;
  }else if
    (ticTacToeGrid[0].value == 'x' && ticTacToeGrid[4].value == 'x' && ticTacToeGrid[8].value == 'x'){
    infoText.textContent = 'X wins';
    stopGame = true;
    xWon = true;
  }else if
    (ticTacToeGrid[2].value == 'x' && ticTacToeGrid[4].value == 'x' && ticTacToeGrid[6].value == 'x'){
    infoText.textContent = 'X wins';
    stopGame = true;
    xWon = true;
  }
  else if (ticTacToeGrid[0].value == 'o' && ticTacToeGrid[1].value == 'o' && ticTacToeGrid[2].value == 'o') {
    infoText.textContent = 'O wins';
    stopGame = true;
    oWon = true;
  }else if
    (ticTacToeGrid[3].value == 'o' && ticTacToeGrid[4].value == 'o' && ticTacToeGrid[5].value == 'o'){
    infoText.textContent = 'O wins';
    stopGame = true;
    oWon = true;
  }else if
    (ticTacToeGrid[6].value == 'o' && ticTacToeGrid[7].value == 'o' && ticTacToeGrid[8].value == 'o'){
    infoText.textContent = 'O wins';
    stopGame = true;
    oWon = true;
  }else if
    (ticTacToeGrid[0].value == 'o' && ticTacToeGrid[3].value == 'o' && ticTacToeGrid[6].value == 'o'){
    infoText.textContent = 'O wins';
    stopGame = true;
    oWon = true;
  }else if
    (ticTacToeGrid[1].value == 'o' && ticTacToeGrid[4].value == 'o' && ticTacToeGrid[7].value == 'o'){
    infoText.textContent = 'O wins';
    stopGame = true;
    oWon = true;
  }else if
    (ticTacToeGrid[2].value == 'o' && ticTacToeGrid[5].value == 'o' && ticTacToeGrid[8].value == 'o'){
    infoText.textContent = 'O wins';
    stopGame = true;
    oWon = true;
  }else if
    (ticTacToeGrid[0].value == 'o' && ticTacToeGrid[4].value == 'o' && ticTacToeGrid[8].value == 'o'){
    infoText.textContent = 'O wins';
    stopGame = true;
    oWon = true;
  }else if
    (ticTacToeGrid[2].value == 'o' && ticTacToeGrid[4].value == 'o' && ticTacToeGrid[6].value == 'o'){
    infoText.textContent = 'O wins';
    stopGame = true;
    oWon = true;
  } else {
    stopGame = true;
    for (let spot of ticTacToeGrid) {
      if (spot.empty == true) {
        stopGame = false;
      }
    }
    if (stopGame == true) {
      infoText.textContent = "It's a draw!";
      draw = true;
    }
  }
  if (stopGame === true) {
    resetButton.style.display = 'block';
  }
}

//function to play the game, add x if cell is empty
const addX = function() {
  //add event listener for the whole grid, but check which box was clicked
  infoText.textContent = "It is X's turn";
  grid.addEventListener('click', placeX = () => {
    let clickedCell = ticTacToeGrid[Number(event.target.id)];
    let cellNumber = event.target.id;
    console.log(clickedCell);
    if (clickedCell.empty == true) {
      const x = gridCells[cellNumber].querySelector('span');
      x.style.display = 'block';
      ticTacToeGrid[cellNumber].empty = false;
      ticTacToeGrid[cellNumber].value = 'x';
      grid.removeEventListener('click', placeX);
      checkWin();
      if (stopGame == false) {
        addO();
      }
    }
  });
}

//function to play the game, add o if cell is empty
const addO = function() {
  //add event listener for the whole grid, but check which box was clicked
  infoText.textContent = "It is O's turn";
  grid.addEventListener('click', placeO = () => {
    let clickedCell = ticTacToeGrid[Number(event.target.id)];
    let cellNumber = event.target.id;
    console.log(clickedCell);
    if (clickedCell.empty == true) {
      const o = gridCells[cellNumber].querySelectorAll('span')[1];
      o.style.display = 'block';
      ticTacToeGrid[cellNumber].empty = false;
      ticTacToeGrid[cellNumber].value = 'o';
      grid.removeEventListener('click', placeO);
      checkWin();
      if (stopGame == false) {
        addX();
      }
    }
  });
}

function restart() {
  resetButton.style.display = 'none';
  let reset = document.querySelectorAll('span');
  reset.forEach(function(item) {
    item.style.display = "none";
  });
  for (let spot of ticTacToeGrid) {
    spot.value = 'none';
    spot.empty = true;
  }
  stopGame = false;
  if (xWon) {
    addO();
    xWon = false;
  } else if (oWon) {
    addX();
    oWon = false;
  } else if (draw) {
    let nextPlayer = Math.random();
    if (nextPlayer > 0.5) {
      addX();
    } else {
      addO();
    }
    draw = false;
  }
}

start();
resetButton.addEventListener('click', restart);
