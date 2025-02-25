//vamos selecionar o id que queremos adicionar o evento 
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function msg(){
    console.log("Clicou");
}

//no botão 1 teremos um evento para apresentar a mensagem a partir do click
btn1.addEventListener("click", msg);

//supondo que após um certo tempo eu não queira mais ter esse evento no meu código de clicou podemos remover com o segundo botão 
btn2.addEventListener("click", function(){
    btn1.removeEventListener("click", msg);//e informo utilizando o remove que irei remover o click do botão 1
});

//obs: A partir do momento que clicamos no segundo botão o primeiro evento de click para de funcionar, o botão não some da tela mas para de executar a função msg criada externamente para adicionarmos em ambos os eventos
