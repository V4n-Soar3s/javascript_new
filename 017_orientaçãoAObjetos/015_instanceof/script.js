//vamos criar uma classe pai 
class Mamifero {//a classe pai vai ter propriedades dela mesma
    constructor(patas){
        this.patas = patas;
    }
}

let coiote = new Mamifero(4);//criamos um animal e informamos que ele é da classe mamifero e o parametro é de 04 patas

//vamos solicitar que seja exibido a quantia de patas do coiote 
console.log(coiote.patas);

//mas caso a gente queira amplificar esse coiote fazendo com que ele nao utilize apenas as caracteristicas do mamifero podemos criar um novo objeto por exemplo: 

class Cachorro extends Mamifero{//entao essa classe cachorro é filha do mamifero (uma extensão)
    constructor(patas, raca){
        super(patas, patas);//e para alterar a pata lá de cima nos usamos super e informamos os parametros patas, patas
        this.raca = raca;
    }
    //podemos criar métodos também 
    latir(){
        console.log("Au au");
    }

}

//e agora vamos criar um pug
let pug = new Cachorro(4, 'Pug');

//aqui nos conseguimos consultar a quantia de patas do pug que vem da extensão pai 
console.log(pug.patas);

pug.latir();

//como eu consigo saber que o cachorro vem do mamifero?

console.log(new Cachorro instanceof Mamifero);

console.log(coiote instanceof Mamifero);

