const terminaId = /ID$/;//o $ torna obrigatório o final da string com ID 

console.log(terminaId.test('MeuID'));//TRUE
console.log(terminaId.test('IDuser'));//false
console.log(terminaId.test('12345ID'));//TRUE
console.log(terminaId.test('ID'));//TRUE
console.log(terminaId.test(" "));//false
console.log(terminaId.test('12134ID1212131243'));//FALSE
console.log(terminaId.test('id'));//false