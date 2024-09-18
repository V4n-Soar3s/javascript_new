/**
Booleans: operadores lógicos

- Por meio de uma comparação resultam em boolean;
&& - and -> para ser true, os dois lados da comparação precisam ser true;
|| - or -> para ser tue, basta um dos lados da comparação ser true;
! - not -> inverter os valores (true vira false) 

*/

console.log(5 > 3 && 3 == 2);//retorna false pq estamos usando and
console.log(5 > 3 || 3 == 1);//retorna true porque usamos o operador OR que atende uma das condições
console.log(3 == 3 && 'Matheus' == 'Matheus');//retorna true pq estamos comparando dois trues em um and
console.log("Felipe" == "João" || false);// vai ser falso 
console.log(!(!(true && true)));// aqui vai retornar true porque eu neguei ele duas vezes utilizando !
console.log(!(false));