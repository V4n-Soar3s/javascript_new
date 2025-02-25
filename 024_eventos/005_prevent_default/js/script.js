//Evento Default


//vamos selecionar o id que queremos adicionar o evento 
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");//vamos selecionar o p que esta adicionado ao nosso codigo html 
let a = document.querySelector("a");//vamos selecionar o link do htm

function msg(e){//iremos passar um e de event na função de mensagem 
    console.log("Clicou no button");//e iremos dar um console log neste e
    e.stopPropagation();//quando adicionamos essa informação estamos parando no evento do button
}

//no botão 1 teremos um evento para apresentar a mensagem a partir do click
btn1.addEventListener("click", msg);

btn2.addEventListener("click", function(e){
    console.log(e);
})

//iremos criar um evento para o p, iremos condicionar o click 
p.addEventListener("click", function(){
    console.log("clicou no parágrafo");
})

a.addEventListener("click", function(e){
    e.preventDefault();//a partir do momento que eu adiciono essa informação o meu link não vai mais para a página do google
    console.log("Não vai mudar de link");
})