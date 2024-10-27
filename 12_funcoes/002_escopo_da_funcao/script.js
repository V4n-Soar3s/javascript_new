//Escopo

let y = 10;//atribui um valor a minha variavel global y

function imprimir(){
    let y = 150;//atribui um valor a minha variavel local y dentro da funcao

    console.log(y);
}

imprimir(y);//invoquei a variavel que esta dentro da função

console.log(y);//invoquei a variavel que esta armazenada no global 

//Neste caso serão apresentados dois valores divergentes, pois, um local nao está ligado ao outro