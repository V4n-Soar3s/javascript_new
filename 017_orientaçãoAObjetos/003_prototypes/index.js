//Prototypes

//criamos um objeto
const pessoa = {
    maos: 2,//propriedade do objeto 
};

//Eu consigo ver qual é o prototype desse objeto utilizando o método getPrototypeOf() e passando da onde quero trazer a informação no caso pessoa 
console.log(Object.getPrototypeOf(pessoa));
//como estamos criando a partir do nada o prototype dele vai ser o Object mesmo da variavel 
//Podemos também comparar com o object prototype e verificar se realmente trás as informações de object desta forma: 
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);// tras a informação true que diz que o nosso objeto criado tem sim como prototype o object 

//tambem podemos utilizar um dos métodos para saber se temos uma propriedade de um objeto exemplo: 
console.log(pessoa.hasOwnProperty('maos'));//que fará o fallback ir lá no object e pesquisar por maos o que retornara true, pois, existe essa propriedade 


