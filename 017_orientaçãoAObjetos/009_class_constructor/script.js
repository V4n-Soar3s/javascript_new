//class constructor (es6)

//vamos criar uma classe
class Cachorro {// nao precisa dos parenteses
  constructor(raca, patas, cor) {//e aqui teremos o metodo constructor que recebe os parametros
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
  }
};

let labrador = new Cachorro('Labrador', 4, 'Caramelo');

console.log(labrador);
