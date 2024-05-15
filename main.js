function randomInt(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    var r = randomInt(255);
    var g = randomInt(255);
    var b = randomInt(255);
    return `rgb(${r},${g},${b})`;
}

function addHover() {
    const div = document.querySelectorAll(".grid");
    div.forEach(element => {
        element.addEventListener("mouseenter", (event) => {
        element.style.backgroundColor = randomRgbColor();
        })
    });
}

const container = document.querySelector("#container");
function createGrid(gridNum) {
    for (let i = 0; i < gridNum; i ++) {
        for (let j = 0; j < gridNum; j++) {
            const newDiv = document.createElement("div");
            newDiv.className = "grid";
            newDiv.style.width = (80/gridNum) + "vh";
            newDiv.style.height = (80/gridNum) + "vh";
            container.append(newDiv);
        }
    }
    addHover();
}

function clearGrid() {
    const grid = document.querySelectorAll(".grid");
    grid.forEach(element => {
        element.remove();
    });
}

function regenerateGrid(gridNum) {
    clearGrid();
    createGrid(gridNum);
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    var gridNum = prompt(`How many number of squares per side for the new grid?
    Pick between 1 and 100.`);
    if (!(/\s/).test(gridNum)) gridNum = parseInt(gridNum);
    while (gridNum <= 0 || !Number.isInteger(gridNum) || gridNum > 100) {
        gridNum = prompt(`How many number of squares per side for the new grid?
        Pick between 1 and 100.`);
        //check if the string contains whitespace char since we only want 1 input
        if (!(/\s/).test(gridNum)) gridNum = parseInt(gridNum);
    }
    regenerateGrid(gridNum);
});

window.onload = createGrid(16); //creates 16x16 grid by default