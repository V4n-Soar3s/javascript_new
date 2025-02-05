//input
//tratamento de erro com input 


//vamos criar uma função para checar números 

function checarNumero(num){//definimos um parametro
    let number = Number(num);//e, seguida pegamos esse numero e tranformamos em number pelo objeto numero, entao a partir de agora mesmo se for uma string ele irá converter para um número
    if(Number.isNaN(number)){//quando utilizamos este método é para verificar se o valor inserido não é um numero 
       alert(`Por favor, informe somente números para o programa`);
    } else{
        return number;
    }
}

checarNumero(8);//saida 8
checarNumero('sorverte');//saida Por favor, informe somente números para o programa

let number = prompt("Digite um número");

checarNumero(number);
