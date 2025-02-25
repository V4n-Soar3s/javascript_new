//page load 


//window.addEventListener("load", function(){
  //  alert("Assine os nossos temos de utilização do site");//sempre que a janela for carregada teremos esse evento 
//});

window.addEventListener("beforeunload", function(e) {
    e.preventDefault(); // Ajuda a ativar o evento em alguns navegadores;
    });