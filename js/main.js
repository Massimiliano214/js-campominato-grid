const gridDom = document.querySelector(".containerSquares");
let gameStart = document.getElementById("avvioGioco");

gameStart.addEventListener("click",
    function() {
     const currentElement = document.querySelector(".mainBottom")
     currentElement.classList.toggle("containerList")   
    }
);

let numero = listaNumeri();

for (let i = 1; i < 101; i++) {
    const numeroScelto = listaNumeri();

    const currentSquare = createNewSquare(numeroScelto);

    currentSquare.addEventListener("click", function() {
        this.classList.toggle("bg_blue");
    });

    gridDom.append(currentSquare);
};



function createNewSquare(numero) {
    const currentElement = document.createElement("div");
    currentElement.classList.add("squares");
    currentElement.innerHTML = `<div class="squares d-flex">${numero}</div>`;
    return currentElement;
}

function listaNumeri() {
    let squares;
for(let i = 1; i < 101; i++) {
    
    squares = i;
    console.log("funzione lista " + squares);
};
return squares;
};
