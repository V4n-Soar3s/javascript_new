//método match - funciona de forma similar ao exec 

const frase = "O número 100 está aqui".match(/\d+/);//criamos o método direto da string
const frase2 = "O número está aqui".match(/\d+/);

console.log(frase);//aqui localiza o valor
console.log(frase2);//aqui retorna null 