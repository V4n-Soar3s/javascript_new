//Escreva uma função que retorne um número aleatório, o número máximo retornado deve ser passado via parâmetro;
//Utilize Math.random();

function numeroAleatorio(number){
    return Math.floor(Math.random() * number) + 1;
}

console.log(numeroAleatorio(20));
console.log(numeroAleatorio(5));
console.log(numeroAleatorio(3));
console.log(numeroAleatorio(100));

function numeroMax(a, b, c, d){
    return Math.max(a, b, c, d);//nesse caso definimos os parametros que o metodo ira percorrer para que n fique como infinito 
}

console.log(numeroMax(13,11, 59, 38));
