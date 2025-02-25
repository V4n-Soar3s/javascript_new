//evento por tecla

//vamos criar direto pois nao há um elemento e esta relacionado a nossa tecla
window.addEventListener("keydown", function(e){

    if(e.key == 'q'){
        console.log("Apertou a letra q");
    }

});

//obs se ficarmos pressionando a tela ele fica repetindo o evento infinitamente pra isso nao ocorrer podemos adicionar os eventos ao key up pq so executa quando soltamos a tecla

window.addEventListener("keyup", function(e){

    if(e.key = "Enter"){
        console.log("Soltou o enter")
    }

});

//keyup é mais interessante para evento de teclas 