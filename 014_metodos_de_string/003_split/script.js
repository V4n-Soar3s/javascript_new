//Método SPLIT - conseguimos dividir uma string em um array, vide exemplo:

let frase = "O rato roeu a roupa do rei de Roma";//Criei uma variavel com uma frase armazenada dentro dela

let palavras = frase.split(" ");///criei uma variavel para separar a frase por partes utilizando o método split

console.log(palavras);//solicitei que seja apresentada a variavel palavras que contém a variavel da frase e trará cada palavra separada no console

//outro exemplo de separador 

let produtos = 'Banana;Maçã;Jaca;Pera;Amora;Abacaxi';

console.log(produtos.split(';'));

