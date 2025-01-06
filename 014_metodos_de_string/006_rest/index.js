//operador rest 

/*
é uma forma de uma função receber indefinidos parâmetros;
O operador rest vai virar um array;
O parâmetro é definido por: ...nome (três pontinhos + o nome do parametro)
*/

//criaremos variaveis que irao se tornar parametros vide: 

let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;

//será criada uma função para imprimir número onde a mesma tera um parâmetro, utilizando rest será mais de um 
function imprimirNumeros(...numeros){
    for(let i = 0; i < numeros.length; i++){
        console.log(numeros[i]);//solicitei que sejam impressos esses numeros no navegador
    }
}


imprimirNumeros(num, num1, num2, num3);
console.log('Pausa');
imprimirNumeros(num1, num2);
console.log('Pausa');
imprimirNumeros(num2, num3);
console.log('Pausa');
imprimirNumeros(2, 4,6,7,8,9,10);

// A função conmverte os argumentos em arrays e une todos, condensa todos num único array. 