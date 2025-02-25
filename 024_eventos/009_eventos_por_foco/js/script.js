//focus e blur

//vamos atrelar o elemento 
let input = document.querySelector("#input1");

//podemos criar agora os dois eventos

//focus
input.addEventListener("focus", function(){
 
    console.log("Entrou no input");

});

//blur
input.addEventListener("blur", function(){
 
    console.log("Saiu do input");

});



