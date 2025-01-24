//como criar um objeto
const cachorro = {
    uivar: function(){//quando dentro de uma variavel criamos uma função quer dizer que estamos criando um método
        console.log("Auuuuuuuuuuuuuuuu");
    },//se eu quiser criar mais de um método dentro da consta preciso separar por virgulas 
    rosnar: function(){
        console.log("grrrrr");
    }
}

//como invocar os métodos?
cachorro.uivar();
cachorro.rosnar();