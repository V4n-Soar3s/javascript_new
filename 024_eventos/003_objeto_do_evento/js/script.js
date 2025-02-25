//como ver as propriedades do evento

//vamos selecionar o id que queremos adicionar o evento 
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function msg(e){//iremos passar um e de event na função de mensagem 
    console.log(e);//e iremos dar um console log neste e
}

//no botão 1 teremos um evento para apresentar a mensagem a partir do click
btn1.addEventListener("click", msg);

btn2.addEventListener("click", function(e){
    console.log(e);
})