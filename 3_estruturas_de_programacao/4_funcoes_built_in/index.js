//Função built-in: prompt()

/**
 * Recebe um input do usuário do sistema e pode guardar este valor
 * Ex: let idade = prompt('Qual a sua idade?');
 * console.log(idade);
 * Esta função é pouco utilizada;
 * 
 */

//Função prompt

let idade = prompt('Qual a sua idade?');

console.log(idade);

/**
 * Função built-in: alert()
 * Exibe uma mensagem na tela do usuário;
 * Ex: alert('Veja esta mensagem!')
 * Esta função é pouco utilizada.
 */

//Função alert
alert('Oi eu sou um alerta');

//Função built-in: Math()

let maior = Math.max(6, 12, 28, 109, 34);//estou solicitando que o progama me traga o maior numero utilizando math.max

console.log(maior);//aqui retorna o maior valor no caso 109

//Math.min(menor numero da variavel)
let menorNumero = Math.min(0, 3, 4, 1, -2)

console.log(menorNumero);

//Math.round (p/ arredondar o número)

let arredondar = Math.round(5.2934723);
console.log(arredondar);//invoquei a função e será apresentado o número 5 devido o arredondamento

//Math.ceil(arredondar pra cima)

let arredonarParaCima = Math.ceil(5.2934723);
console.log(arredonarParaCima);//invoquei a função e sera apresentado numero 6 pois arredondamos para cima com o método ceil
