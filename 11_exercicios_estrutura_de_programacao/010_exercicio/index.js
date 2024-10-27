//numeros primos sao divisiveis apenas por eles mesmos e por zero

let num = 3;//atribuimos um valor a variavel num
let divisoes = 0;//atribuimos um valor a variavel divisoes


for(let i = 1; i <= num; i++){
    if(num % i == 0){
        divisoes++;
    }
}

if(divisoes == 2){
    console.log(`O número ${num} é primo`);
}else{
    console.log(`O número ${num} não é primo`);
}