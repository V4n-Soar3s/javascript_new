//replace child troca completamente um elemento 

let novoElemento = document.createElement('p');//iremos trocar um H1 por um paragrafo 
let texto = document.createTextNode("Troquei o H1 por um novo paragrafo");

novoElemento.appendChild(texto);

//vamos identificar o H1 e acessar ele com query selector
let heading = document.querySelector('#titulo-principal');
//vamos precisar do pai dele tbm 
let paiHeading = heading.parentNode;//aqui informamos como valor o nome do filho e utilizamos o metodo parentNode pra informar que é dentro do pai que iremos mudar 

//iremos utilizar o replace child no pai 
paiHeading.replaceChild(novoElemento, heading);//nos parametros informamos o novo elemento e o elemento antigo para trocar 