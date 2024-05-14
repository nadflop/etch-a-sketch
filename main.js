const container = document.querySelector("#container");

function createGrid() {
    for (let i = 0; i < 16; i ++) {
        for (let j = 0; j < 16; j++) {
            const newDiv = document.createElement("div");
            newDiv.className = "grid";
            container.append(newDiv);
        }
    }
}

createGrid();