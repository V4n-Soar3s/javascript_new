//Definindo funções 

/**
 * Definimos uma função com a palavra function 
 * Damos um nome para a função "imprimirNoConsole" 
 * Se eu quiser passar um argumento ou parametro devo colocar dentro do parenteses (), ou também posso deixar ele vazio;
 * E o corpo da função (condições e etc) definido entre chaves
 */

function imprimirNoConsole(){
    console.log("Olá Mundo")
}

//a função só é executada quando realizamos a invocação da mesma no código para que ela possa ser ativada exemplo:

imprimirNoConsole();

//exemplo de função com parametro

function imprimirUmNumero(num){//passei um parametro
    console.log("O número é: " + num);
}

imprimirUmNumero(2);//atribui um valor ao parametro conseguimos chamar uma função várias vezes e mudar o valor do parametro
imprimirUmNumero(5);//conseguimos chamar uma função várias vezes e mudar o valor do parametro
imprimirUmNumero(15);//conseguimos chamar uma função várias vezes e mudar o valor do parametro
imprimirUmNumero(8);//conseguimos chamar uma função várias vezes e mudar o valor do parametro


//Como declarar uma função numa variável
/*
A função Math.random() é usado para retornar um número pseudoaleatório de ponto flutuante entre 0 e 1.
*/

const numeroAleatorio = function(){
    console.log(Math.random())
}

numeroAleatorio();
numeroAleatorio();
numeroAleatorio();

