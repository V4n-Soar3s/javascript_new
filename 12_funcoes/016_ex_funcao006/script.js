/*
 * Escreva uma função que detecta o tipo de dado passado;
 * verifique se é um number, boolean ou string
 * E retorne uma mensagem para cada tipo
 * Execute uma função para cada caso
 *
 */

function verificarTipoDeDado(dado) {
  if (typeof dado === "string") {
    console.log("Este dado é uma string");
  } else if (typeof dado === "number") {
    console.log("Este dado é um number");
  } else if (typeof dado === "boolean") {
    console.log("Este dado é um boolean");
  }
}

verificarTipoDeDado(true);
verificarTipoDeDado(1);
verificarTipoDeDado("Olá Vanessa");
