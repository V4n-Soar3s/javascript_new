//Operador ?

//Podemos criar uma expressão regular e colocar um ? após um de seus caracteres e a partir disso escrever abacaxi com X ou sem ele retorna true
const padrao = /Abacax?i/;

console.log(padrao.test('Abacaxi'));//true
console.log(padrao.test('Abacai'));//true

//defini uma nova regex onde pode ter mais de um digito e o alfanumerico seria opcional 
const padrao2 = /\d+\w?/;

console.log(padrao2.test('123'));//true
console.log(padrao2.test('123a'));//true
console.log(padrao2.test('123 '))//true
