//eventos no mouse 

//vamos criar um evento do btn
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mousedown", function(){
    console.log("Apertou o botão");
});

btn1.addEventListener("mouseup", function(){
    console.log("Soltou o botão");
});

btn2.addEventListener("dblclick", function(){
    console.log("Clicou duas vezes no botão");
});

//e se quisessemos pegar o botão direito?
btn2.addEventListener("contextmenu", function(e){
    e.preventDefault();//para o menu não aparecer
    console.log("Botão direito");
});

