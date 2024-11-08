//Escreva uma função que recebe uma string 

/*
Se o texto conter mais de 10 caracteres imprima "Texto muito longo"
Se conter menos, imprima "Texto dentro do limite"

*/

function verificarTexto(texto){
    if(texto.length > 10){//usamos a propriedade length para verificar o número de caracteres da string
        console.log("Texto muito longo");
    } else {
        console.log("Texto dentro do limite");
    }
}

verificarTexto('Olá Vanessa, tudo bem?');
verificarTexto('Oi');