//get e set 
// get atribui valor e o set altera

class Cachorro{
    constructor(raca, cor){//criamos uma classe de cachorro que define raca e cor
        this.raca = raca;
        this.cor = cor;
    }

    lati(){
        console.log("Au au");
    }

    get getCor(){
        return this.cor;//vai retornar para o usuario a cor do cachorro
    }

    set setCor(cor){//que recebe uma cor setada mas que pode ser alterada
        this.cor = cor;
    }
}


//vamos criar um cachorro
let pastor = new Cachorro('Pastor Alemão', 'Sem cor');

//vamos chamar o pastor no console
console.log(pastor);

//definimos o cachorro sem cor pois o mesmo ainda nao havia nascido mas vamos supor que ele nasça e a gente precise definir uma cor para o mesmo como fazemos isso?

//utilizando o get e set conseguimos fazer isso 

//mudando a cor do pastor com set 

pastor.setCor = 'Marrom';

//e o get cor seria assim 

console.log(pastor.getCor);//assim capturamos a nova cor do cachorro após o nascimento 