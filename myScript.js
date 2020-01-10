const GRID_SIZE = 16;

function populateGrid() {
    const container = document.querySelector("#container");
    let docFragment = document.createDocumentFragment();

    for (i = 0; i < GRID_SIZE; i++) {
        for (j = 0; j < GRID_SIZE; j++) {
            const div = document.createElement("div");
            div.classList.add("square");
            docFragment.appendChild(div);
        }
    }

    container.appendChild(docFragment);
}


populateGrid();