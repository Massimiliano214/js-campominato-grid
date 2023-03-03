const gridDom = document.querySelector(".containerSquares");
let gameStart = document.getElementById("avvioGioco");

gameStart.addEventListener("click",
    function() {
        const currentElement = document.querySelector(".mainBottom");
        currentElement.classList.toggle("containerList");
        
        quadratiDaMettere();
    }
);

const numeroMax = quadratiDaMettere();

console.log(numeroMax);

for (let i = 1; i < numeroMax; i++) {
    

    let currentSquare = createNewSquare(i);

    currentSquare.addEventListener('click', function() {
        currentSquare.classList.toggle('clicked');
        currentSquare.classList.remove("d-flex");
        console.log("la cella selezionata è la seguente: " + i);
    });

    gridDom.append(currentSquare);
};



function createNewSquare(numero) {
    const currentElement = document.createElement("div");
    currentElement.classList.add("squares");
    currentElement.classList.add("d-flex");
    currentElement.innerHTML = `${numero}`;
    return currentElement;
};

function quadratiDaMettere() {
    let quadratiValue ="";
    const quadratiScelti = document.getElementById("difficolta");
    console.log(quadratiScelti.value);
    quadratiValue = quadratiScelti.value;
    return quadratiValue;
}