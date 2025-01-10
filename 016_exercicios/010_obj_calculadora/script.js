// Criação do objeto calculadora
const calculadora = {
  somar: function (a, b) {
    return a + b;
  },
  subtrair: function (a, b) {
    return a - b;
  },
  multiplicar: function (a, b) {
    return a * b;
  },
  dividir: function (a, b) {
    return a / b;
  },
};

console.log(calculadora.somar(3, 4));
console.log(calculadora.subtrair(5, 5));
console.log(calculadora.multiplicar(3, 3));
console.log(calculadora.dividir(10, 2));
