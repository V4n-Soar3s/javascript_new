//Podemos limitar um numero de caracteres para estar dentro do regex exemplo 

//No caso de um cep o mesmo tem cinco digitos no começo e após o traço tres digitos no final
const cep = /\d{5}-\d{3}/;

console.log(cep.test("02350-030"));//true

const celular = /\(\d{2}\)\d{5}-\d{4}/;

console.log(celular.test("(11)94603-2988"));//true
