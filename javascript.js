
if (btnBox == null) {
    var btnBox = document.createElement('div');
    btnBox.className = "button-container";

    var btn = document.createElement('button');
    btnBox.appendChild(btn);
}


if (gridBox == null) {
    var gridBox = document.createElement('div');
    gridBox.className = 'grid-container';

}

if (gridSize == null) {
    var gridSize;
}

var body = document.querySelector('body');


body.appendChild(btnBox);
body.appendChild(gridBox);


for (let i = 1; i <= 16; i++) {
    let verticalElement = document.createElement('div');
    verticalElement.className = 'vertical';
    gridBox.appendChild(verticalElement);
    for (let j = 1; j <= 16; j++) {
        let horizontalElement = document.createElement('div');
        horizontalElement.className = 'horizontal';
        verticalElement.appendChild(horizontalElement);
    }
    gridSize = 16;
}

var horizontals = document.querySelectorAll(".horizontal");


function createGrid() {
    if (gridSize != 0) {
        verticalNodes = document.querySelectorAll('.vertical');
        for (let i = 1; i <= gridSize; i++) {
            verticalNodes.forEach((verticalNode) => {verticalNode.removeChild(verticalNode.firstChild)});
        }
        for (let i = 1; i <= gridSize; i++)
            gridBox.removeChild(gridBox.firstChild);
    }
    gridSize = prompt("Please enter a grid size less than 100");
    if (gridSize > 100) {
        gridSize = 16;
    }
    for (let i = 1; i <= gridSize; i++) {
        let verticalElement = document.createElement('div');
        verticalElement.className = 'vertical';
        gridBox.appendChild(verticalElement);
        for (let j = 1; j <= gridSize; j++) {
            let horizontalElement = document.createElement('div');
            horizontalElement.className = 'horizontal';
            verticalElement.appendChild(horizontalElement);
        }
    }
};

/* function changeColor(element) {
    element.style.backgroundColor = 'black';
}; */

function draw() {
    horizontals = document.querySelectorAll(".horizontal"); 
    horizontals.forEach((horizontal) => {horizontal.addEventListener('mouseover', event => {horizontal.style.backgroundColor = 'black'})});
}
 

btn.addEventListener('click', event => {createGrid()});

gridBox.addEventListener('mouseover', event => {draw()});


