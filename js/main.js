const gridDom = document.querySelector(".containerSquares");

let numero = listaNumeri();

for (let i = 1; i < 101; i++) {
    const numeroScelto = listaNumeri();

    const currentSquare = createNewSquare();

    currentSquare.addEventListener("click", function() {
        this.classList.toggle("clicked");
    });

    gridDom.append(currentSquare);
};


/*
const play = document.querySelector(".startBtn");
const currentElement = document.querySelector(".containerSquares");
let squares;
play.addEventListener("click",
    function() {
        currentElement.classList.toggle('d-flex');
    }
    
);

const numeroDaMostrare = listaNumeri();

let numeroQuadrato;
numeroQuadrato.innerHTML = 
console.log(numeroQuadrato)
for(let i = 1; i < 101; i++) {
    
};

let numeroGenerato = listaNumeri()
*/

function createNewSquare() {
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
