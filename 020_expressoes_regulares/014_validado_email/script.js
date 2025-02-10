//validando e-mail 

const validarEmail = /\w+@\w+\.\w+/;//e-mail

console.log(validarEmail.test("vansoaresilva25@gmail.com"));//true
console.log(validarEmail.test("vanessa@gmail"));//false
console.log(validarEmail.test("gmail.com"));//false
console.log(validarEmail.test("vansoaresilva25@gmail.com.br"));//true