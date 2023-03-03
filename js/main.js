const gridDom = document.querySelector(".containerSquares");
let gameStart = document.getElementById("avvioGioco");

gameStart.addEventListener("click",
    function() {
     const currentElement = document.querySelector(".mainBottom")
     currentElement.classList.toggle("containerList")   
    }
);

for (let i = 1; i < 101; i++) {
    

    let currentSquare = createNewSquare(i);

    currentSquare.addEventListener('click', function() {
        this.classList.toggle('clicked');
        this.classList.remove("d-flex");
    });

    gridDom.append(currentSquare);
};



function createNewSquare(numero) {
    const currentElement = document.createElement("div");
    currentElement.classList.add("squares");
    currentElement.innerHTML = `<div class="squares d-flex">${numero}</div>`;
    return currentElement;
};
