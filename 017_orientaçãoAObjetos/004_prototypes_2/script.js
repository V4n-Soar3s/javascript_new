//Prototypes part 2

//criamos um objeto
const pessoa ={
    maos: 2,
};

const pessoaNova = Object.create(pessoa);// e aqui nós criamos um novo objeto que herda todas as propriedades, funções e métodos do objeto pessoa que se denomina como seu prototype (seu pai)

//com isso podemo solicitar que seja exibido no console a propriedade maos utilizando o objeto pessoa nova veja:
console.log(pessoaNova.maos);//irá apresentar a quantia de 2 isso dando certo significa que o novo objeto é filho do prototype pessoa

//Mas se por um acaso eu quisesse perguntar se pessoaNova tem a propriedade maos retornaria false, pois, essa propriedade pertence ao pai (prototype) ex:
console.log(pessoaNova.hasOwnProperty('maos'));//false 

//Vamos ver se o objeto novaPessoa realmente é filho do prototype pessoa: 
console.log(Object.getPrototypeOf(pessoaNova) === pessoa);//true


