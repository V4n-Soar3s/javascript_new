//argumentos default (pré-definidos)

function potencia(base, exp = 2){
    return Math.pow(base, exp);
}

console.log(potencia(2));//caso nao passe o argumento o valor do exp sera 2

console.log(potencia(2,3));//aqui como passamos dois argumetos o exp será 3 e o resultado sera 8

