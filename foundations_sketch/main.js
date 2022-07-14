const getStyle = getComputedStyle(document.body);

const sketchGrid = document.querySelector('.js-sketch');
const rainbowMode = document.querySelector('.js-rainbow');

let color = `${getStyle.getPropertyValue('--clr-n-black')}`;
let hueValue = 0;

// Scaling values
let gridSize = 400;
let fidelity = 50;





// Initialize grid
sketchGrid.style.cssText = `grid-template-columns: repeat(${fidelity}, minmax(0, 1fr));`;
for (let i = 0; i < (fidelity ** 2); i++) {
  addCell();
}

// Color in cell
sketchGrid.addEventListener('mousedown', () => sketchGrid.addEventListener('mouseover', fillCell));
sketchGrid.addEventListener('mouseup', () => sketchGrid.removeEventListener('mouseover', fillCell));

// Toggle rainbow mode
rainbowMode.addEventListener('change', function(e) {
  if (e.target.checked) {
    
  }
  else {
    
  }
});



function addCell() {
  let cell = document.createElement('div');
  cell.className = 'sketch-grid__cell';
  cell.style.cssText = `width: ${gridSize / fidelity}px; height: ${gridSize / fidelity}px;`;
  sketchGrid.appendChild(cell);
}

function fillCell(e) {
  rainbowMode.checked ?
    color = `hsl(${rainbowHue()}, 100%, 75%)` :
    color =`${getStyle.getPropertyValue('--clr-n-black')}`;
  
  e.target.style.backgroundColor = `${color}`;
}

function rainbowHue() {
  hueValue <= 256 ? hueValue += 10 : hueValue = 0;
  return hueValue;
}