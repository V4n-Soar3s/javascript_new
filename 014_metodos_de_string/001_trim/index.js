//trim - Remove tudo o que não é string

let texto = ' \n teste \n ';

console.log(texto.trim());//será apresentada apenas a mensagem teste os \n serão excluidos 

//Outro exemplo também é aplicado onde há espaços demais, exemplo:

let nome = "      Amara";//há muito espaço 
//sem, o trim seria apresentado desta forma          Amara, com o trim fica Amara

let nomeCorrigido = nome.trim();//aqui criamos a variavel de nome sem espaço 

console.log(nomeCorrigido);//cortou os espaços
console.log(nome);//permaneceu com espaço 

//Ele também consegue  tirar alguns caracteres especiais 