//validando um dominio 

const validarDominio = /[?www.]\w+\.com|.com.br/;//como validar uma url 

console.log(validarDominio.test("www.google.com"));//true
console.log(validarDominio.test("www.youtube.com.br"));//true
console.log(validarDominio.test("www.google"));//false
console.log(validarDominio.test("cursoemvideo.com.br"))//true porque definimos o www como opcional 