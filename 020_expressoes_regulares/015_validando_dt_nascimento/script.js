//validando data de nascimento com regex 

const validarDataDeNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;//data brasileira com barra

console.log(validarDataDeNasc.test("22/09/1995"));//true
console.log(validarDataDeNasc.test('5/2/2000'));//false porque nao respeita o formato que pedimos 
console.log(validarDataDeNasc.test('05-02-2001'))//false 