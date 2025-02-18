//appendChild 

let novoElemento = document.createElement("p");
let texto = document.createTextNode("Um novo elemento de paragrafo foi criado aqui");

novoElemento.appendChild(texto);

//agora precisamos encontrar o pai do elemento p 

let p = document.querySelector('#paragrafo-principal');
let pai = p.parentNode;//aqui é pra localizar o pai 

pai. appendChild(novoElemento);//esse aqui adiciona dentro do elemento pai 