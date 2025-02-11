//callbacks 

console.log('1');//solicitei que seja apresentada essa mensagem no console 

//iremos criar um callback que recebe dois parametros, um parametro é um callback e o outro é o tempo em milisegundos 
setTimeout(function(){
    console.log('5');
}, 2000);//será executada após 2 segundos 

console.log('2');
console.log('3');
console.log('4');