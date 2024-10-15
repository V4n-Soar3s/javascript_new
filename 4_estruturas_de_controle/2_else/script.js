/*
Estrutura de condicional: else

- A estrutura de controle else é sempre utilizada com o if;
- Podemos executar um outro bloco de código, caso a instrução do if não seja atendida;
- Ou seja, SE NÃO EXECUTAR o bloco if, EXECUTE o bloco else;
 */

//criei uma variavel
let nome = 'Pedro';

//criei uma condição
if(nome == 'João'){
    console.log('Seu nome é João');
}else{//caso o primeiro bloco da condição nao seja atendido o segundo sera executado
    console.log('O seu nome não é João');
}

//outro exemplo com else

let velocidade = 100;

if(velocidade <= 80){
    console.log('Não foi multado');
}else{
    console.log('Foi multado!');
}

// Mais um exemplo com else

let media = 4;

if(media >= 6.5){
    console.log('Aprovado');
}else{
    console.log('Reprovado');
}