//Objetos

let pessoa = {
  nome: "Vanessa",
  profissao: "Programadora",
  idade: 29,
  cidade: "São Paulo",
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cidade);

//outro exemplo de objetos e de como acessar um objeto

let cachorro = {
  nome: "Bob",
  idade: "5 meses",
  raca: "SRD",
  proprietario: "Vanessa",
  latir: function(){
    console.log('Au Au');//criamos uma função dentro do método quando invocarmos latir
  }
};

console.log(cachorro.raca);
console.log(cachorro.proprietario);
cachorro.latir();//retorna au au no console

// [] = array
// {} = objetos
// atribução é sempre por dois pontos dentro do objeto e depois escreve o tipo de dado (string, number ou boolean)
