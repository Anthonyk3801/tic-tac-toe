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

//function to play the game, add x if cell is empty
const addX = function() {
  //add event listener for the whole grid, but check which box was clicked
  infoText.textContent = "It is X's turn";
  grid.addEventListener('click', placeX = () => {
    let clickedCell = ticTacToeGrid[Number(event.target.id)];
    console.log(clickedCell);
    if (clickedCell.empty == true) {
      if (event.target.id == "0") {
        const x = gridCells[0].querySelector('span');
        x.style.display = 'block';
        ticTacToeGrid[0].empty = false;
        ticTacToeGrid[0].value = 'x';
      }
      else if (event.target.id == "1") {
        const x = gridCells[1].querySelector('span');
        x.style.display = 'block';
        ticTacToeGrid[1].empty = false;
        ticTacToeGrid[1].value = 'x';
      }
      else if (event.target.id == "2") {
        const x = gridCells[2].querySelector('span');
        x.style.display = 'block';
        ticTacToeGrid[2].empty = false;
        ticTacToeGrid[2].value = 'x';
      }
      else if (event.target.id == "3") {
        const x = gridCells[3].querySelector('span');
        x.style.display = 'block';
        ticTacToeGrid[3].empty = false;
        ticTacToeGrid[3].value = 'x';
      }
      else if (event.target.id == "4") {
        const x = gridCells[4].querySelector('span');
        x.style.display = 'block';
        ticTacToeGrid[4].empty = false;
        ticTacToeGrid[4].value = 'x';
      }
      else if (event.target.id == "5") {
        const x = gridCells[5].querySelector('span');
        x.style.display = 'block';
        ticTacToeGrid[5].empty = false;
        ticTacToeGrid[5].value = 'x';
      }
      else if (event.target.id == "6") {
        const x = gridCells[6].querySelector('span');
        x.style.display = 'block';
        ticTacToeGrid[6].empty = false;
        ticTacToeGrid[6].value = 'x';
      }
      else if (event.target.id == "7") {
        const x = gridCells[7].querySelector('span');
        x.style.display = 'block';
        ticTacToeGrid[7].empty = false;
        ticTacToeGrid[7].value = 'x';
      }
      else if (event.target.id == "8") {
        const x = gridCells[8].querySelector('span');
        x.style.display = 'block';
        ticTacToeGrid[8].empty = false;
        ticTacToeGrid[8].value = 'x';
      }
      grid.removeEventListener('click', placeX);
      addO();
    }
  });
}

//function to play the game, add o if cell is empty
const addO = function() {
  //add event listener for the whole grid, but check which box was clicked
  infoText.textContent = "It is O's turn";
  grid.addEventListener('click', placeO = () => {
    let clickedCell = ticTacToeGrid[Number(event.target.id)];
    console.log(clickedCell);
    if (clickedCell.empty == true) {
      if (event.target.id == "0") {
        const o = gridCells[0].querySelectorAll('span')[0];
        x.style.display = 'block';
        ticTacToeGrid[0].empty = false;
        ticTacToeGrid[0].value = 'o';
      }
      else if (event.target.id == "1") {
        const o = gridCells[1].querySelectorAll('span')[1];
        o.style.display = 'block';
        ticTacToeGrid[1].empty = false;
        ticTacToeGrid[1].value = 'o';
      }
      else if (event.target.id == "2") {
        const o = gridCells[2].querySelectorAll('span')[1];
        o.style.display = 'block';
        ticTacToeGrid[2].empty = false;
        ticTacToeGrid[2].value = 'o';
      }
      else if (event.target.id == "3") {
        const o = gridCells[3].querySelectorAll('span')[1];
        o.style.display = 'block';
        ticTacToeGrid[3].empty = false;
        ticTacToeGrid[3].value = 'o';
      }
      else if (event.target.id == "4") {
        const o = gridCells[4].querySelectorAll('span')[1];
        o.style.display = 'block';
        ticTacToeGrid[4].empty = false;
        ticTacToeGrid[4].value = 'o';
      }
      else if (event.target.id == "5") {
        const o = gridCells[5].querySelectorAll('span')[1];
        o.style.display = 'block';
        ticTacToeGrid[5].empty = false;
        ticTacToeGrid[5].value = 'o';
      }
      else if (event.target.id == "6") {
        const o = gridCells[6].querySelectorAll('span')[1];
        o.style.display = 'block';
        ticTacToeGrid[6].empty = false;
        ticTacToeGrid[6].value = 'o';
      }
      else if (event.target.id == "7") {
        const o = gridCells[7].querySelectorAll('span')[1];
        o.style.display = 'block';
        ticTacToeGrid[7].empty = false;
        ticTacToeGrid[7].value = 'o';
      }
      else if (event.target.id == "8") {
        const o = gridCells[8].querySelectorAll('span')[1];
        o.style.display = 'block';
        ticTacToeGrid[8].empty = false;
        ticTacToeGrid[8].value = 'o';
      }
      grid.removeEventListener('click', placeO);
      addX();
    }
  });
}
addX();
