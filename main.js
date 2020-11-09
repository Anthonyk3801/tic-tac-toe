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

//function to play the game, add x or o if cell is empty
const addX = function() {
  //add event listener for the whole grid, but check which box was clicked
  grid.addEventListener('click', place = () => {
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
    }
  });
}
addX();
