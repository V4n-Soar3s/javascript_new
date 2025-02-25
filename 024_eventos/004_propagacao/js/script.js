//Propagação

//vamos selecionar o id que queremos adicionar o evento 
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");//vamos selecionar o p que esta adicionado ao nosso codigo html 

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

//o evento do button esta dentro do evento do p entao quando clicarmos em um ele ativa o outro também pq o dom nao separa os elementos, quando clicamos no button iremos chamar os dois eventos de p e btn1 esse é um problema de propagação