/*
Estrutura condicional: else if

- Ainda podemos encadear mais condições com o else if;
- Ou seja, antes de executar um else, ou até mesmo sem ele, podemos verificar mais uma condição;

 */

let a = 5;
let b = 3;

if (a + b == 3) {
  console.log("O resultado é 3");
} else if (a == 4) {
  console.log("O valor de a é 4");
} else if (b == 3) {
  console.log("O valor de b é 3");
} else {
  console.log("Nenhuma das condições acima foi atendida!");
}


//outro exemplo

let nome = "Vanessa";
let idade = 28;

if(nome != undefined && nome == "Matheus"){
    console.log("Nome está definido")
}else if(nome == "Vanessa" && nome.length > 5 &&  idade == 50){
    console.log('O nome é Vanessa')
}else{
    console.log("Não é Vanessa")
}

// else if sem o else

if(1 > 2){
    console.log("Teste");
}else if ( 1 == 1){
    console.log('Testando');
}

//outro teste com else if

let media = 5.7;

if(media < 5){
    console.log('Reprovado')
} else if((media > 5) && media < 6){
    console.log('Em recuperação');
} else if(media >= 6){
    console.log('Aprovado');
} else{
    console.log('Nenhum valor válido foi inserido')
}
