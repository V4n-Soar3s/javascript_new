//class methods 

//Vamos criar uma classe 
class Cachorro{
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }

    latir(){//metodo sera executado como uma funcao para exibir o latido
        console.log("Au, au");
    }
}

//utilizaremos prototype para adicionar uma quantia de patas 
Cachorro.prototype.patas = 4;//em class nao precisamos colocar propriedades dentro do constructor apenas métodos

let labrador = new Cachorro('Labrador', 'Caramelo');//aqui passaremos apenas os parametros do constructor

console.log(labrador.patas);// e quando solicitarmos essa informação ele vai trazer a quantia de 04 informada no prototype
labrador.latir();