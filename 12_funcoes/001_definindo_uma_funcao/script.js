//Definindo funções

/**
 * Definimos uma função com a palavra function
 * Damos um nome para a função "imprimirNoConsole"
 * Se eu quiser passar um argumento ou parametro devo colocar dentro do parenteses (), ou também posso deixar ele vazio;
 * E o corpo da função (condições e etc) definido entre chaves
 */

function imprimirNoConsole() {
  console.log("Olá Mundo");
}

//a função só é executada quando realizamos a invocação da mesma no código para que ela possa ser ativada exemplo:

imprimirNoConsole();

//exemplo de função com parametro

function imprimirUmNumero(num) {
  //passei um parametro
  console.log("O número é: " + num);
}

imprimirUmNumero(2); //atribui um valor ao parametro conseguimos chamar uma função várias vezes e mudar o valor do parametro
imprimirUmNumero(5); //conseguimos chamar uma função várias vezes e mudar o valor do parametro
imprimirUmNumero(15); //conseguimos chamar uma função várias vezes e mudar o valor do parametro
imprimirUmNumero(8); //conseguimos chamar uma função várias vezes e mudar o valor do parametro

//Como declarar uma função numa variável
/*
A função Math.random() é usado para retornar um número pseudoaleatório de ponto flutuante entre 0 e 1.
*/

const numeroAleatorio = function () {
  console.log(Math.random());
};

numeroAleatorio();
numeroAleatorio();
numeroAleatorio();

//- Podemos fazer uma operação aritmética em uma função e retornar um valor;

const soma = function (a, b) {
  return a + b;
};

console.log(soma(3, 5));

//Podemos tbm adicionar estruturas de programação na função, assim como o exemplo abaixo:

const saudacao = function (nome) {
  if (nome == "Matheus") {
    return "Olá Matheus";
  } else {
    return "O nome não é Matheus";
  }
};

console.log(saudacao("Matheus")); //vamos dar o valor do parametro na hora de invocar a funcao, como nao foi matheus a mensagem que irá ser apresentada será o nome não é matheus

//função para multiplicar 3 numeros

function multiplicarTresNumeros(x, y, z) {
  return x * y * z;
}

console.log(multiplicarTresNumeros(2, 3, 4)); // podemos invocar assim ou assim:

const multi = multiplicarTresNumeros(4, 4, 8); //atribuindo o valor a uma variavel

console.log(`O valor de mult é ${multi}`); // e utilizar ele depois

//Condições para dirigir com funções

function podeDirigir(idade, cnh) {
  if (idade >= 18 && cnh == true) {
    console.log(`Pode dirigir`);
  } else {
    console.log(`Não pode dirigir`);
  }
}

console.log(podeDirigir(21, false));
console.log(podeDirigir(15, true));
console.log(podeDirigir(21, 0));//0 é considerado false em JS quando chamamos boleanos
console.log(podeDirigir(18, 1));//1 é considerado verdadeiro em JS quando chamamos boleanos

