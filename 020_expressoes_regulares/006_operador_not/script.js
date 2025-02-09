//operador NOT 

//vamos escrever um regex que nao aceita A e B
const notAandB = /[^aAbB]/;

console.log(notAandB.test('a'));//false
console.log(notAandB.test('A'));//false
console.log(notAandB.test('B'));//false
console.log(notAandB.test('Oi tudo bem?'))// aqui é aceito como true, pois, há outros caracteres além de a e b 

const nottoAandZ = /[^a-z]/;

console.log(nottoAandZ.test('oi'));//false
console.log(nottoAandZ.test('123'));//true
console.log(nottoAandZ.test('OLÁ'));//true pois sao letras maiusculas 
console.log(nottoAandZ.test('123 as' ))//retorna true pois há caracteres válidos dentro da string