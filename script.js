// Draw a 16 x 16 grid of <div>s
function fillGrid() {
  const gridWidth = 16;
  const sketchPad = document.querySelector('#sketch-pad'); 
  for (let i = 0; i < gridWidth ** 2; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid-cell');
    sketchPad.appendChild(newDiv);
  }
}

// Fill grid cells with color on mouseover
function drawCell() {
  const gridCells = document.querySelectorAll('.grid-cell');
  gridCells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
      if (!cell.classList.contains('grid-filled')) {
        cell.classList.add('grid-filled');
      }
    });
  });
}

fillGrid();

drawCell();
