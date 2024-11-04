//arrow function (em uma linha)

//primeiro vamos usar o exemplo de como ela ficaria normalmente 
const mulplicarPorDois = (x) => {
    return x * 2;
}

console.log(mulplicarPorDois(2));

//de uma forma mais simples também podemos fazer dessa forma com apenas um parametro
const mulplicarPorDois2 = x => x * 2;//outra forma de fazer arrow function sem parentes e sem ter um corpo mt grande 

console.log(mulplicarPorDois2(4));

//entao quando a expressao for simples e tiver apenas um parametro podemos utilizar arrow function do jeito que está acima, lembrando que sempre devemos prezar pela leitura do código se for ficar dificil a leitura é melhor deixar em mais linhas para melhor manutenção e leitura