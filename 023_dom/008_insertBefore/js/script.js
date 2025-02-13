//iremos determinar muito bem 3 coisas 
//1ª um novo elemento

let newElement = document.createElement("p");//novo elemento
let targetElement = document.querySelector("#titulo-principal");//elemento alvo
let elementFather = document.querySelector("#container-principal");//elemento pai 

//agora podemos utilizar o insertBefore para inserir um elemento
elementFather.insertBefore(newElement, targetElement);

