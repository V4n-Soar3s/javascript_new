//o strict é declarado no inicio da pagina

"use strict"

//se por um acaso eu tirar o let o strict aponta o erro no console informando que a variavel nao foi definida
let opa = 'teste';

//tbm nao podemos deletar a propriedade prototype porque é do codigo nativo da linguagem 
//delete Object.prototype;

//vamos ver como funcionaria em uma função 
function teste(){
    "use strict"//para declarar uma função usamos o strict dentro dela
    let testando = 'teste';//inserindo o let volta a funcionar
}

teste();//ele nao consegue usar o testando porque a o strict e porque dentro da função a variavel foi declarada sem const ou let

let o = {p: 1, p:2};//se eu declarar uma variavel com duas propriedades com o mesmo nome o strict também apresenta erro 

//tambem nao posso definir propriedades em valores primitivos 
//false.prop = "";
//"teste".prop = "";


