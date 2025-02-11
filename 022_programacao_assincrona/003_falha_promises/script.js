//falha nas promises

//vamos criar a promise e gerar um erro
let  p = Promise.resolve(new Error("Não deu certo"));

//vamos criar um código que está sendo executado no nosso js
console.log("Ainda não ocorreu a execução da promise");

p.then(value => console.log(value))//solicitamos que no futuro seja apresentada a promise
 .catch(reason => console.log("Falhou: " + reason));