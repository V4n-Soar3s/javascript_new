//resumo incrementação 

//no while precisamos definir a variavel antes

let numero = 5;

while(numero < 50){//enquanto o numero for menor que 50

    console.log(numero);//sera exibido na tela

    numero +=10;//entao toda vez que ele entrar nesse while ele irá incrementar o valor do número atual + 10 podíamos escrever dessa forma tbm numero = numero + 10, mas da forma numero+=10 é mais facil 

}


//outro tipo de incrementação 

for (let i = 0; i < 10; i++){//da forma que colocamos i++ eu consigo incrementar o valor de +1 neste i cada vez que ele passar pelo looping

    console.log(`O i é ${i}`);

}

// com i++ nao podemos escolher qual numero irá na soma é sempre +1 ou -1, no numero+=10 podemos escolher qualquer valor na soma;

//Vamos verificar decrementando

for(let i = 10; i > 0; i--){
    console.log(`O i é ${i}`);
}

