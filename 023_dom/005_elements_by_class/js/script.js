//utilizando tag nos iriamos filtrar todos os elementos que utilizam li e nao somente o que definimos por classe
console.log(document.getElementsByTagName('li'));

//agora com a classe criada selecionamos apenas aqueles que precisamos e que queremos que tenha uma cor diferente 
console.log(document.getElementsByClassName('itens-azuis'));

console.log(document.getElementsByClassName('itens-vermelhos'));

console.log(document.getElementsByClassName('itens'));