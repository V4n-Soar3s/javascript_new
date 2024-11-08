function decrement(x){
    while(x > 0){
        x = x - 1;
    if(x % 2 == 0)
        console.log(x);
    }
}

decrement(20);

// com while esta correto mas o mercado de trabalho utiliza mais for, exemplo:

function imprimePar(num){
    for(let i = num; i >= 0; i--){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}

imprimePar(8);
imprimePar(15);