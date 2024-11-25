//Shift e unshift 

let carros = ['BMW', 'Audi', 'VW', 'Fiat'];//crie um array com algumas marcas de carro

let removerPrimeiroCarro = carros.shift();//o primeiro elemento do array sera removido 

console.log(removerPrimeiroCarro);//apresentará a mensagem do elemento  que foi removido no caso BMW 
console.log(carros);//apresentara o array já com BMW sendo removida

carros.unshift('Gurgel');//quando chamado o método unshift estou adicionando um elemento ao inicio do array

console.log(carros);//aqui sera apresentado o array com Gurgel como primeiro elemento 

console.log(carros[0]);//para acessar apenas o primeiro indice
