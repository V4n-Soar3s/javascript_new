//Verificando altura e largura

//criamos um elemento que podemos chgamar qualquer um do site
let elemento = document.querySelector('#titulo-principal');

console.log('largura: ' + elemento.offsetWidth);//considera as bordas e conta a largura em pixels
console.log('altura: ' + elemento.offsetHeight);//de altura


//forma de nao considerar as bordas
console.log('largura: ' + elemento.clientWidth);
console.log('altura: ' + elemento.clientHeight);
//Saída sera os mesmos resultados, mas porque isso? 
//R:. Porque esse elemento não tem borda e por conta disso acaba sendo o mesmo resultado, mas podemos adicionar a borda no css e criar o resultado ao lado 