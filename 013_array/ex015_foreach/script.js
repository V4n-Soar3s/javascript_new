//Método forEach 

/*
- O mesmo itera a cada elemento do array, funciona como se fosse um loop de for ou while só que é um método pronto do JavaScript, passamos o array en yn forEach contendo um parametro que é a unidade de cada elemento dentro do array ou indice que estamos trabalhando e ele vai interagir com cada um deles 
*/

//criei um array
let nomes = ["Vanessa", "Luna", "Bruna", "Carla"];

//vou usar o método forEach para dar um comando para cada elemento contido dentro do array um por um 
nomes.forEach(nome => {//passei o paramentro nome que se refere a unidade do que estamos falando 
    console.log(`O nome é ${nome}`);
});

// o parametro que informamos nome é unitário, pois, estamos trabalhando um nome por vez

//criei um array

let racas = ["Pug", "Poodle", "Beagle", "Buldogue"];

racas.forEach(raca =>{
    console.log(`A raça desse cachorro é ${raca}`)
})

