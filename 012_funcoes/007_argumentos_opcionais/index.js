//argumentos opcionais

// exemplo que exige os dois argumentos

function soma(a, b) {
  if (a === undefined || b === undefined) {
    console.log("Esta função precisa ter os dois argumentos");
  } else {
    return a + b;
  }
}

console.log(soma(1));

console.log(soma(1, 2));

// exemplo que os argumentos sao opcionais

function saudacao(nome, idade) {
  if (idade === undefined) {
    console.log("Olá " + nome);
  } else {
    console.log("Olá " + nome + " você tem " + idade + " anos.");
  }
}

saudacao("Matheus", 28); // passei o dois argumentos
saudacao("Vanessa");// passei apenas um argumento

