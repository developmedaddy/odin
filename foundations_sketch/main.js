const getStyle = getComputedStyle(document.body);
const sketchGrid = document.querySelector('.js-sketch');
const fidelitySlider = document.querySelector('.js-fidelity')
const rainbowMode = document.querySelector('.js-rainbow');

let color = `${getStyle.getPropertyValue('--clr-n-black')}`;
let hueValue = 0;

// Scaling values
let gridSize = 400;
let fidelity = fidelitySlider.value;

fidelitySlider.addEventListener('change', setFidelity);


// Initialize grid
setGrid();


// Color in cell
sketchGrid.addEventListener('mousedown', () => sketchGrid.addEventListener('mouseover', fillCell));
sketchGrid.addEventListener('mouseup', () => sketchGrid.removeEventListener('mouseover', fillCell));


function setGrid() {
  // Remove any existing cells
  let existing = document.querySelectorAll('.sketch-grid__cell');
  existing.forEach(cell => cell.remove());

  // Lay out grid according to fidelity
  sketchGrid.style.cssText = `grid-template-columns: repeat(${fidelity}, minmax(0, 1fr));`;
  color = `${getStyle.getPropertyValue('--clr-n-white')}`
  for (let i = 0; i < (fidelity ** 2); i++) addCell();
}

function addCell(color) {
  let cell = document.createElement('div');
  cell.className = 'sketch-grid__cell';
  cell.style.cssText = `width: ${gridSize / fidelity}px; height: ${gridSize / fidelity}px; background: ${color}`;
  sketchGrid.appendChild(cell);
}

function setFidelity(e) {
  fidelity = e.target.value;
  setGrid();
}

function fillCell(e) {
  // Check for rainbow toggle
  rainbowMode.checked ?
  color = `hsl(${rainbowHue()}, 100%, 75%)` :
  color =`${getStyle.getPropertyValue('--clr-n-black')}`;

  e.target.style.backgroundColor = `${color}`;
}

function rainbowHue() {
  hueValue <= 256 ? hueValue += 10 : hueValue = 0;
  return hueValue;
}