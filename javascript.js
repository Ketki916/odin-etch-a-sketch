let btnBox = document.createElement('div');
btnBox.className = "button-container";

let btn = document.createElement('button');

let gridBox = document.createElement('div');
gridBox.className = 'grid-container';

function createGrid() {
    let gridSize = prompt("Please enter a grid size less than 100");
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

let horizontal = document.querySelectorAll('.horizontal');

function changeColor() {
    horizontal.style.backgroundColor = black;
};

let body = document.querySelector('body');

body.appendChild(btnBox);
body.appendChild(gridBox);

btn.addEventListener('click', event => {createGrid()});


horizontal.addEventListener('mouseover', event => {changeColor()});

