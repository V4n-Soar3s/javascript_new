//conjunto de caracteres

//criamos uma regex pra procurar por numeros
const reg1 = /[12345]/;

console.log(reg1.test("Temos o número 6"));//retorna false
console.log(reg1.test("temos o númereo 2"));//retorna true
console.log(reg1.test("temos o numero 28"));//apesar de não haver o numero 23 dentro do nosso conjunto irá retornar true, pois, o primeiro número existe dentro do conjunto 
console.log(reg1.test("Temos o número 60"));//retornará false pois nenhum dos numeros existem dentro do conjunto
console.log(reg1.test("Temos o número 84"));//retorna tru, pois, o 4 foi localizado dentro do conjunto  

//podemos também criar um conjunto de caracteres com intervalo utilizando -, exemplo: 

const reg2 = /[0-9]/;
console.log(reg2.test('Temos o número 10'));//true
console.log(reg2.test("Temos o numero 834"))//true
console.log(reg2.test("Temos algum número?"));//false