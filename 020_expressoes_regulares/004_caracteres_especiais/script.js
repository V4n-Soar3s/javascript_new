//caracteres especiais 

/*

- \d - qualquer dígito de caractere;
- \w - um caractere alfanumérico(”teste”);
- \s - qualquer caractere de espaço em branco;
- \D - caracteres que não são dígitos;
- \W - caractere não-alfanumérico;
- \S - caractere que não seja espaço em branco;
- . - qualquer caractere, menos nova linha;


*/

//vamos criar um regex com o . por exemplo:
const pontoRegex = /./;//colocamos um ponto entre a regex, neste caso ela irá aceitar tudo menos quebra de linha 

console.log('.');
console.log(pontoRegex.test("asd"));//true
console.log(pontoRegex.test(" "));//true
console.log(pontoRegex.test("123"));//true
console.log(pontoRegex.test("123asd"));//true

//agora veremos com d
const dRegex = /\d/;//aceita qualquer dígito de caractere, corresponde ao mesmo que digitar [0-9]

console.log('d');
console.log(dRegex.test("asd"));//false
console.log(dRegex.test(" "));//false
console.log(dRegex.test("123"));//true pois há numeros
console.log(dRegex.test("123asd"));//true pois apesar de haver letras tem numeros 

// utilizando D
const regexD = /\D/;//[^0-9] circunflexo significa não ou seja ele nao aceita numeros

console.log('D');
console.log(regexD.test("asd"));//true
console.log(regexD.test(" "));//true
console.log(regexD.test("123"));//false
console.log(regexD.test("123asd"));//true

//utilizando s qualquer caractere de espaço em branco;
const sRegex = /\s/;

console.log('s');
console.log(sRegex.test("asd"));//false
console.log(sRegex.test(" "));//true
console.log(sRegex.test("123"));//false
console.log(sRegex.test("123asd"));//false

//utilizando S caractere que não seja espaço em branco. espaço, tabs ou quebras de linha

const sRegex2 = /\S/;

console.log('S');
console.log(sRegex2.test("asd"));//true
console.log(sRegex2.test(" "));//false
console.log(sRegex2.test("123"));//true
console.log(sRegex2.test("123asd"));//true

//utilizando w, aceita de [0-9] e de [A-Z], nao aceita espaços 
const wRegex = /\w/;

console.log('w');
console.log(wRegex.test("asd"));//true
console.log(wRegex.test(" "));//false
console.log(wRegex.test("123"));//true
console.log(wRegex.test("123asd"));//true





