/**
 * Estrutura condicional: if(se)
 * 
 * O programa vai executar um bloco de código, SE algo acontecer;
 * Onde algo é a condição imposta por um statement;
 * Que resulta em um boolean (true or false);
 *  
 * lembrando sobre sinais
 * =  é atribuição 
 * == comparação
 * === identico
 */

let idade = 19;

if(idade == 19){//criei uma condição
    console.log('A idade é igual a 19');
}

if(idade > 25){//crei uma condição
    console.log('A idade é maior que 25');
}

let nome = "Matheus"//criei uma variavel

if(nome == "Matheus" && idade > 10){//criei uma condição 
    console.log('Liberado!');
}

let passaporte = true;

if((nome == "Matheus" && idade > 30) || passaporte == true){
    console.log('Liberado 2');
}


