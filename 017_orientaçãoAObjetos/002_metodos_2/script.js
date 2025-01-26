//vamos criar um objeto novamente determinado uma variavel e dando propriedades a ele
const cachorro = {
    raca:'SRD',
    uivar: function(){//quando criamos uma função dentro de uma propriedade de uma variavel estamos criando um método
        console.log("Auuuuuuuuuuuuu");
    },
    rosnar: function(){
        console.log("grrrrrrr");
    },
    setRaca: function(raca){
      this.raca = raca;// o this se referencia a esse objeto que disse que a propriedade raça é igual a raça, nós conseguimos tratar o objeto com esse método, quando vemos o this em algum lugar significa que estamos tratando exatamente daquele objeto
    },//vamos criar um método para definir raça
    getRaca: function(){//podemos criar métodos para imprimir informações do próprio objeto
        return "A raça é " + this.raca;

    }
}

console.log(cachorro.raca);//vai abri com a informação de sem raça definida dessa propriedade
cachorro.setRaca('Pator alemão');//invocamos a funcão que esta dentro do objeto e passamos o parametro que é a raça pastor alemao 
console.log(cachorro.raca);//entao agora se eu imprimo a raça ao invés de apresentar SRD vai ser apresentado Pastor alemao, pois, houve uma alteração com o This exatamente naquele objeto após passarmos o parametro 
console.log(cachorro.raca);
cachorro.setRaca('Pug');
console.log(cachorro.raca);
console.log(cachorro.getRaca());

