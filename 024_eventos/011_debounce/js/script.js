//vamos criar como exemplo um evento atrelado ao mouse

let timeout;

window.addEventListener("mousemove", function(e){

  clearTimeout(timeout);
  
  timeout = setTimeout(function(){
    console.log("eixo X: " + e.x);
    console.log("eixo Y: " + e.y);
  },500);

});

//criando a função setTimeout informamos que aquele evento será executado a cada 500 milisegundos