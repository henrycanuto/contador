let numero = 0;

let tela = document.querySelector("#numero");
let aumentar = document.querySelector("#aumentar")
let diminuir = document.querySelector("#diminuir");

aumentar.addEventListener("click", function(){
    numero++;
    tela.textContent = numero;
});

diminuir.addEventListener("click", function(){
    numero--;
    tela.textContent = numero;
});