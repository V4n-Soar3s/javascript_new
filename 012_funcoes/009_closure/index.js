//CLOSURE 

function lembrarSoma(x) {
    return function(y) {
        return x + y;
    }
}

let soma1 = lembrarSoma(2);

console.log(soma1(5));

let soma2 = lembrarSoma(5);

console.log(soma2(7));


// outro exemplo

function contador(i) {
    let cont = i;
    let somarContador = function() {
        console.log(cont);
        cont++;
    }
    return somarContador;
}

let meuContador = contador(5);

meuContador();
meuContador();
meuContador();

//da mesma maneira podemos ter um contador dois que inicia com outro numero e chamar outra função, exemplo

let meuContador2 = contador(2);

meuContador2();
meuContador2();
meuContador2();