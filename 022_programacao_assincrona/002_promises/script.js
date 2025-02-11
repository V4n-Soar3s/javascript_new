//promise

//vamos criar uma promessa e chamar o método resolve
let p = Promise.resolve(5);

//aqui criaremos nossos outros códigos
console.log('Outros códigos');

console.log(p);//solicitei que seja exibida a promise 

//como reaproveitar e utilizar a promise futuramente?
p.then((value) => {return value +5})
 .then((value) => {console.log(value)});//podemos encadear outro then e fazer outra ação

//then = então


