/*
Strings: Detalhes mais técnicos

- A \ pode dar um 'escape' na string, e isso permite 'efeitos especiais';
- Por exemplo: \n pula uma linha;
- console.log("Essa é uma string \n de duas linhas");
- Para inserir uma ' ou " devemos iniciar a String com a aspa inversa que desejamos inserir; 
- O template literal serve para computar valores também, ex:
- console.log(`A soma de 2 + 2 é ${2 + 2}`);
- Concantenação é um processo de 'somar' Strings, veja:
- console.log("salada" + "de" + "fruta") 
*/
 

//quebra de linha com \n
console.log("Primeira linha \nSegunda linha");//pula a linha com \n

//imprimir aspas em uma string ex:
console.log("O meu nome é 'Vanessa'");
console.log('O nome dela é "Julia"');

//template strings (beck tick's)
console.log(`A multiplicação de 5 por 3 é ${5 * 3}`);

//concatenação de strings
console.log("O " + "meu " + "nome " + "é " + "Vanessa.");



