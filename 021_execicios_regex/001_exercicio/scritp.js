const maiusculas = /[A-Z]/;

console.log(maiusculas.test("v"));//false
console.log(maiusculas.test("V"));//true 
console.log(maiusculas.test('123456'));//false
console.log(maiusculas.test('1214ABC456'));//true
console.log(maiusculas.test('123edf456'));//false
