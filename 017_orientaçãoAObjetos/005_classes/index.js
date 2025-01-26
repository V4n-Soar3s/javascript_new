//Classes

//criamos uma classe
let cachorro = {
    patas: 4,
    raca: 'SRD',
    latir: function(){
        console.log("Au au");
    }
}

let labrador = Object.create(cachorro);//labrador vai ser um objeto instanciado a partir da classe cachorro

labrador.latir();//vamos colocar o labrador para latir aproveitando um método do nosso prototype

labrador.raca = 'Labrador';//tbm posso definir que o meu labrador tem a raça de labrador

//e caso eu queira imprimir a propriedade raça que esta sendo instancianda da minha classe para o objeto labrador será apresentada a mensagem labrador, veja: 
console.log(labrador.raca);//imprime labrador
console.log(cachorro.raca);//IMPRIME SRD 

//criei um novo objeto que sera instanciado de cachorro
let pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

pastorAlemao.latir();
console.log(pastorAlemao.raca);
console.log(pastorAlemao.patas);


