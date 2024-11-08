/*
Estrutura de repetição: for

- Semelhante ao while, porém amplamente utilizado;
- É a estrutura de repetição mais fácil de compreender;
- Fica tudo em apenas uma linha, declaramos a variável a condição e o incremento em apenas uma linha, exemplo:

for(let numeto = 2; numero < 100; numero = numero *2){
	console.log("O número é:" + numero);
}

 */

for(let i = 0; i < 100 ; i = i + 3){
    console.log(`A soma de i com 2 é: ${i + 2}`);
}