//como mudar uma url exemplo a tag a 
let a = document.querySelector("footer a");
//aqui nós podemos ver o que esta na tag a
console.log(a.getAttribute('href'));
//como mudar esse atributo? Iremos definir um link para a mudança:
let link = 'https://www.google.com/';
//e iremos acessar o a novamente e utilizar o set para setar o href para ser alterado
a.setAttribute('href', link);//sempre adicionamos o parametro antigo e o novo 

//e aqui comprovamos que foi alterado
console.log(a.getAttribute('href'));



