//regex com caracteres especiais 

//como ver se é um dia?
const dia = /\d\d/;//com isso solicitamos que seja verificado se há dois digitos na expressão 

console.log(dia.test('05'));//true
console.log(dia.test('2025'));//true porque há dois digitos 
console.log(dia.test('asd'));//false
console.log(dia.test('asd12'));//true
console.log(dia.test('asd1'));//false pois sós existe um digito

//para que seja apenas com dois digitos mesmo podemos utilizar a expressão de length para contar a expressão regular e permitir apenas dois digitos observe: 

console.log('Utilizando length para definir a  quantia de digitos e realizar a verificação de tamanho:')
console.log(dia.test("2019") && "2019".length == 2);//false
console.log(dia.test("10") && "10".length == 2);//true

//como verificar se há palavra tem tres letras
const palavraTresLetras = /\w\w\w/;

console.log(palavraTresLetras.test('oi'));//false
console.log(palavraTresLetras.test('asd'))//true
console.log(palavraTresLetras.test('asdidoaaisas'));//vai dar true mas o correto é false pra isso delimitamos o tamanho com length 
console.log(palavraTresLetras.test('Vanessa') && 'Vanessa'.length == 3);//aqui delimitamos o tamanho e retorna false 



