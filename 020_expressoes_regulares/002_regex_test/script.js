//Expressões regulares são padrões usados para encontrar e manipular textos, no JavaScript servem para buscar palavras, números ou símbolois dentro de uma string.

//há duas formas de criar a Regexp uma delas é usando new
const reg1 = new RegExp('bola');

//como vamos testar se há bola em uma string?
console.log(reg1.test("O menino estava jogando bola"));//saída true
console.log(reg1.test("O menino estava jogando dominó"));//saida false 

//outra formas de criar regExp entre barras
const reg2 = /bola/;

console.log(reg2.test("O menino estava jogando bola"));//saída true
console.log(reg2.test("O menino estava jogando dominó"));//saida 

//mais uma forma de verificar regexp é fazendo a verificação de uma variavel 
let text = 'Há uma bola na cesta';

console.log(reg2.test(text));//retorna true, pois fizemos o teste em uma variavel 

//também podemos criar a expressão regular direto no console, observe:

console.log(/quadrado/.test('Onde tem um quadrado?'));//retorna true
console.log(/quadrado/.test('123456quadrado891012128'));//true

//Podemos utilizar expressão regular no meio de uma sentença de programação 


