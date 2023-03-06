let gameStart = document.getElementById("avvioGioco");

gameStart.addEventListener("click",
    function() {
        const currentElement = document.querySelector(".mainBottom");
        currentElement.classList.toggle("containerList");
        
        createNewSquare();
    }
);



function createNewSquare() {

    const levelDom = document.getElementById("difficolta");
    const level = levelDom.value;

    console.log("numero caselle" + level);

    let cells;
    let cellForSide;

    if (level == 101) {
        cells = 100;
    } else if (level == 82){
        cells = 81;
    } else {
        cells = 49;
    }

    cellForSide = Math.sqrt(cells);
    console.log(cells);
    console.log(cellForSide);

    quadratiDaMettere(cells, cellForSide);
    
    
};

function quadratiDaMettere(cells, cellForSide) {
    const gridDom = document.querySelector(".containerSquares");
    gridDom.innerHTML = "";
    for (let i = 1; i <= cells; i++) {
        console.log(i);
        
        let currentCell= ownCell(cellForSide, i)

        currentCell.addEventListener("click", function(){
            this.classList.toggle("clicked");
            console.log(i);
        });

        gridDom.append(currentCell);
    }
};

function ownCell(cellForSide, number) {
    const totCells = document.createElement("div");
    totCells.classList.add("squares");
    totCells.style.width = `calc(100% / ${cellForSide})`;
    totCells.style.height = `calc(100% / ${cellForSide})`;
    totCells.innerHTML = ` <div class="cell-numer">${number}</div>`;
    return totCells;
}

/*
function quadratiDaMettere() {
    let quadratiValue ="";
    const quadratiScelti = document.getElementById("difficolta");
    console.log(quadratiScelti.value);
    quadratiValue = quadratiScelti.value;
    return quadratiValue;
}
*/