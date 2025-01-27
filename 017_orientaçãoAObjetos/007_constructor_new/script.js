//Classes constructor por new
// O que pode determinar que uma função é uma classe é a primeira letra do nome dado a função iniciar com a letra maiuscula isso é comum em muitas linguagens ao criar classes
//instanciamos uma nova classe com a sintaxe de new, new é um metodo mais utilizado 

function Cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function(){
        console.log("Auuuuuuuuuuuu");
    }
}

//neste caso criaremos um objeto instanciado de cachorro uivando pois ele herda as propriedades da classe cachorro 
let husky = new Cachorro('Husky', 4, 'branco com marrom');

console.log(husky);
husky.uivar();
