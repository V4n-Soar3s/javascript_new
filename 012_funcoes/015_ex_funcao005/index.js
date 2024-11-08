//Escreva uma função que recebe a idade de uma pessoa
/*
 * Se ela tem mais de 18 anos ela pode entrar na auto escola, imprima uma mensagem informando isso;
 * Se ela tem menos, ela não pode, imprima outra mensagem com este aviso;
 * Execute a função nos dois casos;
 */

function autoEscola(idade) {
  if (idade >= 18) {
    console.log(`Você tem ${idade} e pode frequentar a auto escola`);
  } else {
    console.log(`Você tem ${idade} e ainda não pode frequentar a auto escola.`);
  }
}

autoEscola(18);
autoEscola(21);
autoEscola(17);
