//vamos acessar os chilNodes que seriam os nós
console.log(document.body.childNodes[1]);
//como acessar o childNode dessa div
console.log(document.body.childNodes[1].childNodes);
//e a partir disso eu poderia acessar o elemento dela h1 dessa forma:
console.log(document.body.childNodes[1].childNodes[1]);
//e agora eu posso acessar uma propriedade nele chamada innerText que seria o texto do elemento e exibir ele na tela, veja:
console.log(document.body.childNodes[1].childNodes[1].innerText);


