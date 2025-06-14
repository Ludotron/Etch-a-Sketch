let gridContainer = document.querySelector("#gridContainer");

let numberOfRows = 16;
let numberOfColumns = 16;
const gridWidth = 960;
let squareWidth = gridWidth / numberOfColumns;
let squareHeight = squareWidth;

/*
for (let i = 0; i < numberOfRows; i++) {
    let oneRow = document.createElement("div");
    oneRow.classList = "rowContainer";
    for (let j = 0; j < numberOfColumns; j++) {
        let oneSquare = document.createElement("div");
        oneSquare.classList = "square";
        oneRow.appendChild(oneSquare);
    }

    gridContainer.appendChild(oneRow);
}
*/
function updateDimension (value) {
    numberOfColumns = value;
    numberOfRows = numberOfColumns;
    squareWidth = gridWidth / numberOfColumns;
    squareHeight = squareWidth;
}

function buildTheGrid () {
    for (let i = 0; i < numberOfRows; i++) {
        let oneRow = document.createElement("div");
        oneRow.classList = "rowContainer";
        for (let j = 0; j < numberOfColumns; j++) {
            let oneSquare = document.createElement("div");
            oneSquare.classList = "square";
            oneRow.appendChild(oneSquare);
        }

        gridContainer.appendChild(oneRow);
    }
    gridContainer.addEventListener("mouseover", handleHover);
}
function clearTheGrid () {
    const body = document.querySelector("body");
    body.removeChild(gridContainer);
    gridContainer = document.createElement("div");
    gridContainer.id = "gridContainer";
    body.appendChild(gridContainer);
}

buildTheGrid();

function changeColor(square) {
    const COLOR_NUMBER_OF_VALUE = 256; //0 - 255
    let red = Math.floor(Math.random() * COLOR_NUMBER_OF_VALUE);
    let green = Math.floor(Math.random() * COLOR_NUMBER_OF_VALUE);
    let blue = Math.floor(Math.random() * COLOR_NUMBER_OF_VALUE);
    square.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    let opacity = Number(square.style.opacity);
    opacity += 0.1;
    if (opacity > 1.0) {
        opacity = 1.0;
    }
    square.style.opacity = opacity;
    console.log(opacity);
};

function handleHover(me) {
    changeColor(me.target);
};

const customizeButton = document.querySelector("#customizeButton");
customizeButton.addEventListener("click", () => {
    let customizedValue;
    let customizedNumberOfColumns;
    do {
        customizedValue = prompt("grid size ? (a real number please)", "16");
        customizedNumberOfColumns = Number(customizedValue);
    } while (isNaN(customizedNumberOfColumns))
    console.log(customizedNumberOfColumns);
    updateDimension(customizedNumberOfColumns);
    clearTheGrid();
    buildTheGrid();
});


