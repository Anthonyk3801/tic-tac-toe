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
    }
  });
}
addX();
