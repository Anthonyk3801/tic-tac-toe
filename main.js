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

//pull all elements from html
const grid = document.querySelector('.TTT-grid');
const gridCells = Array.from(document.querySelectorAll('.spot'));
const infoText = document.querySelector('p');

//value to stop the game
let stopGame = false;

//tell the person if x's or o's won
function checkWin(){
  if (ticTacToeGrid[0].value == 'x' && ticTacToeGrid[1].value == 'x' && ticTacToeGrid[2].value == 'x') {
    infoText.textContent = 'X wins';
    stopGame = true;
    document.getElementById("restartGame").hidden = false;
  }else if
    (ticTacToeGrid[3].value == 'x' && ticTacToeGrid[4].value == 'x' && ticTacToeGrid[5].value == 'x'){
    infoText.textContent = 'X wins';
    stopGame = true;
    document.getElementById("restartGame").hidden = false;
  }else if
    (ticTacToeGrid[6].value == 'x' && ticTacToeGrid[7].value == 'x' && ticTacToeGrid[8].value == 'x'){
    infoText.textContent = 'X wins';
    stopGame = true;
    document.getElementById("restartGame").hidden = false;
  }else if
    (ticTacToeGrid[0].value == 'x' && ticTacToeGrid[3].value == 'x' && ticTacToeGrid[6].value == 'x'){
    infoText.textContent = 'X wins';
    stopGame = true;
    document.getElementById("restartGame").hidden = false;
  }else if
    (ticTacToeGrid[1].value == 'x' && ticTacToeGrid[4].value == 'x' && ticTacToeGrid[7].value == 'x'){
    infoText.textContent = 'X wins';
    stopGame = true;
    document.getElementById("restartGame").hidden = false;
  }else if
    (ticTacToeGrid[2].value == 'x' && ticTacToeGrid[5].value == 'x' && ticTacToeGrid[8].value == 'x'){
    infoText.textContent = 'X wins';
    stopGame = true;
    document.getElementById("restartGame").hidden = false;
  }else if
    (ticTacToeGrid[0].value == 'x' && ticTacToeGrid[4].value == 'x' && ticTacToeGrid[8].value == 'x'){
    infoText.textContent = 'X wins';
    stopGame = true;
    document.getElementById("restartGame").hidden = false;
  }else if
    (ticTacToeGrid[2].value == 'x' && ticTacToeGrid[4].value == 'x' && ticTacToeGrid[6].value == 'x'){
    infoText.textContent = 'X wins';
    stopGame = true;
    document.getElementById("restartGame").hidden = false;
  }
  else if (ticTacToeGrid[0].value == 'o' && ticTacToeGrid[1].value == 'o' && ticTacToeGrid[2].value == 'o') {
    infoText.textContent = 'O wins';
    stopGame = true;
    document.getElementById("restartGame").hidden = false;
  }else if
    (ticTacToeGrid[3].value == 'o' && ticTacToeGrid[4].value == 'o' && ticTacToeGrid[5].value == 'o'){
    infoText.textContent = 'O wins';
    stopGame = true;
    document.getElementById("restartGame").hidden = false;
  }else if
    (ticTacToeGrid[6].value == 'o' && ticTacToeGrid[7].value == 'o' && ticTacToeGrid[8].value == 'o'){
    infoText.textContent = 'O wins';
    stopGame = true;
    document.getElementById("restartGame").hidden = false;
  }else if
    (ticTacToeGrid[0].value == 'o' && ticTacToeGrid[3].value == 'o' && ticTacToeGrid[6].value == 'o'){
    infoText.textContent = 'O wins';
    stopGame = true;
    document.getElementById("restartGame").hidden = false;
  }else if
    (ticTacToeGrid[1].value == 'o' && ticTacToeGrid[4].value == 'o' && ticTacToeGrid[7].value == 'o'){
    infoText.textContent = 'O wins';
    stopGame = true;
    document.getElementById("restartGame").hidden = false;
  }else if
    (ticTacToeGrid[2].value == 'o' && ticTacToeGrid[5].value == 'o' && ticTacToeGrid[8].value == 'o'){
    infoText.textContent = 'O wins';
    stopGame = true;
    document.getElementById("restartGame").hidden = false;
  }else if
    (ticTacToeGrid[0].value == 'o' && ticTacToeGrid[4].value == 'o' && ticTacToeGrid[8].value == 'o'){
    infoText.textContent = 'O wins';
    stopGame = true;
    document.getElementById("restartGame").hidden = false;
  }else if
    (ticTacToeGrid[2].value == 'o' && ticTacToeGrid[4].value == 'o' && ticTacToeGrid[6].value == 'o'){
    infoText.textContent = 'O wins';
    stopGame = true;
    document.getElementById("restartGame").hidden = false;
  } else {
    stopGame = true;
    for (let spot of ticTacToeGrid) {
      if (spot.empty == true) {
        stopGame = false;
      }
    }
    if (stopGame == true) {
      infoText.textContent = "It's a draw!";
      document.getElementById("restartGame").hidden = false;
    }
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
addX();

function restart() {
  let reset = document.querySelectorAll('span');
  reset.forEach(function(item){
  item.textContent = ""
  })
  stopGame = false;
}
