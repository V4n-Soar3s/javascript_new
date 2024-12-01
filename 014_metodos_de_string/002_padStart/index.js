//padStart

let sku = "34";//defini um código de produto 
//porém vamos supor que o nosso padrão seja de 6 digitos, como podemos resolver isso?
console.log(sku.padStart(6, "0"));//utilizaremos o método padStart para adicionar os caracteres faltantes na string, colocamos o parametro de 6 e adicionamos o número que irá completar até chegar nessa quantia antes do número informado

//sku == código de produto 

//outro exemplo 
let sku2 = "7348";
console.log(sku2.padStart(6, '0'));
