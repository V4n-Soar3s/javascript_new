//loop em array 

let nomes = ['Matheus', 'Maria', 'Marcos', 'Marina'];//criei um array com 04 propriedades se indice seria ate 03

//vou criar uma estrutura de repetição que fara com que o loop se repita te alcançar o tamanho maximo de propriedades do array, observe:
for(let i = 0; i <= nomes.length; i++){//enquanto i for menor que o comprimento de nome que sao 04 sera apresentada a mensagem no console
    console.log(nomes[i]);//o i vai acessar o indice de cada elemento 
}

let frutas = ["Maçã", "Banana", "Laranja", "Uva"];
let index = 0;

while (index < frutas.length) {
  console.log(frutas[index]); // Imprime cada fruta
  index++; // Incrementa o índice
}

