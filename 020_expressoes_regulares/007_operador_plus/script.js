//Operador plus 

const umOuMaisNumeros = /\d+/;//significa que ele aceita um digito ou quantos forem necessários 

console.log(umOuMaisNumeros.test('1518'));//true
console.log(umOuMaisNumeros.test(" "));//false
console.log(umOuMaisNumeros.test('afsdajsdjddsahdhsadsad'));//false pois aceita apenas digitos
console.log(umOuMaisNumeros.test('yauhaissi123kasasiasuhja'));//retorna true pois localiza digitos