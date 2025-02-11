//generator 

//definimos que a funcao é um generator utilizando function*

function* criadorId(){
    let id = 0;//vamos criar uma variavel que é o nosso ponto de inicio que é 0 o nosso id
    while(true){//criamos um while que é uma estrutura infinita ela nunca vai terminar
        yield id++;//ele vai incrementar o id e sempre vamos receber esse id diferente
    }
}

let criaId = criadorId();//vamos guardar o valor em uma variavel 

//e agora sempre que utilizarmos o método next ele irá executar uma vez o loop
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);

console.log(criaId.next());//iremos receber as propriedades dele 


