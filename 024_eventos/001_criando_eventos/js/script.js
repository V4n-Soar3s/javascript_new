//01 - Criando nosso primeiro evento

//iremos selecionar o elemento
let btn = document.querySelector("button");

//iremos atrelar o evento listener nele para que o evento seja escutado
btn.addEventListener("click", () =>{//iremos passar uma função anônima
    console.log("Clicou");
})