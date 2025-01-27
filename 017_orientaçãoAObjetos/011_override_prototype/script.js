//Override Prototype

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
Cachorro.prototype.patas = 4;

let labrador = new Cachorro('Labrador', 'Amarelo');

console.log(labrador.patas);
labrador.latir();

//podemos consultar o objeto pai caso ngm defina podemos acessar dessa forma 
console.log(Cachorro.prototype.raca); //isso serve de guia para outros casos diferentes
console.log(labrador.raca);

