//async functions 

//como criar uma função assincrona 
async function somar(a, b) {
    return a +b;
}

somar(2, 2).then(function(value){
    console.log(value)
});