//symbols 

//vamos criar uma classe 
class   Cachorro{
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("au au");
    }
}

Cachorro.prototype.raca = 'SRD';

//como criar um symbol
let patas = Symbol();

Cachorro.prototype[patas] = 4;//criamos um symbol de patas para o cachorro 

let labrador = new Cachorro('Labrador', 'Amarelo');


labrador.latir();

//podemos consultar o objeto pai caso ngm defina podemos acessar dessa forma 
console.log(Cachorro.prototype.raca); //isso serve de guia para outros casos diferentes
console.log(labrador.raca);

//acessando o symbol só dessa forma conseguiremos visualizar as patas 
console.log(Cachorro.prototype[patas]);//acesso o prototype
console.log(labrador[patas]);//acesso as patas do labrador 

