let sketchGrid = document.querySelector('.js-sketch');

// Scaling values
let gridSize = 400;
let fidelity = 50;

// Initialize grid
sketchGrid.style.cssText = `grid-template-columns: repeat(${fidelity}, minmax(0, 1fr));`;
for (let i = 0; i < (fidelity ** 2); i++) {
  addCell();
}

// Listen for mousedown
sketchGrid.addEventListener('mousedown', () => sketchGrid.addEventListener('mouseover', colorCell));
sketchGrid.addEventListener('mouseup', () => sketchGrid.removeEventListener('mouseover', colorCell));






function addCell() {
  let cell = document.createElement('div');
  cell.className = 'sketch-grid__cell';
  cell.style.cssText = `width: ${gridSize / fidelity}px; height: ${gridSize / fidelity}px;`;
  sketchGrid.appendChild(cell);
}

function colorCell(e) {
  e.target.style.backgroundColor = 'black'
}
