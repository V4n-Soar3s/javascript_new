//escopo aninhado 

let a = 8;

function multiplicar(x, y){
    let a = x * y; 

    if(a > 10){
        let a = 0;

        a++;
        
        console.log(a);
    }

    console.log(a);
}

console.log(a);

multiplicar(5, 8)