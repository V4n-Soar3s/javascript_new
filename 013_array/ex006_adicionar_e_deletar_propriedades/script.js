//Como criar e deletar propriedades de objetos 

//objeto
let pessoa = {
    nome: 'Vanessa',
    idade: 29, 
    profissao: 'Analista de Suporte',
}

//como acessar uma propriedade
console.log(pessoa.nome);

//como deletar uma propriedade do objeto 
delete pessoa.nome;

//quando deletamos e chamamos a propriedade nao vai mais existir por conta disso nao achamos ela e é apresentada a mensagem undefined, pois, ela nao tem mais valor
console.log(pessoa.nome);

//quando eu imprimir o objeto vai aparecer apenas minha idade e profissao confirmando que foi deletado
console.log(pessoa);

//como adicionar uma propriedade
pessoa.casado = 'true';

//imprimir a mensagem da nova propriedade
console.log(pessoa.casado);

//quando imprimir o objeto a partir desse momento terá a informação de casado
console.log(pessoa);

//adicionar mais uma propriedade
pessoa.animais = 6;

console.log(pessoa.animais);
console.log(pessoa);