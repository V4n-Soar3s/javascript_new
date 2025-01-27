//Método por prototype

//criamos a classe com o seus parametros
function Cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
};

Cachorro.prototype.uivar = function(){//criamos uma instancia ligada ao seu prototype e informando a sua função 
    console.log('Auuuuuuuuuuuuuuu');
};

Cachorro.prototype.latir = function(){
    console.log('Au Au');
};

//Digamos que nesse exemplo a classe fica apenas com as propriedades e os métodos separados, deixando o código mais limpo e organizado.... Essa é a maneira mais correta de criar métodos ao objetos pelo prototype dele 

let husky = new Cachorro('Husky', 4, 'Cinza');
husky.uivar();
husky.latir();

console.log(husky);


