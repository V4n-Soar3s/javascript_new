//arrow function 

let consoleTeste = () => {//quando fazemos isso ja estamos criando uma arrow function, neste caso nao estamos passando um parametro
    console.log(`Olá Mundo`);//e aqui será o corpo da arrow function que exibirá Olá Mundo no console
}

consoleTeste();//invocamos a arrow function com o nome da variável 

//é chamada de arrow function por conta da => (seta)

//outro exemplo usando parametros

let soma = (a, b) => {
    return a + b;
}

console.log(soma(10, 20));

//O comportamento é igual uma função não há diferença porém temos uma sintaxe mais enxuta 