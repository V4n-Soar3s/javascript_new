//Instancia por função 

//vamos criar uma função (constructor por função)
function criaCachorro(raca, patas, cor){
    let cachorro = Object.create({});// vamos criar um object vazio e depois citar as propriedades dele
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function(){
        console.log("Au Au");
    }
    return cachorro;// e depois de citar todas as propriedades retornar o objeto cachorro 
}

let doberman = criaCachorro("Doberman", 4, "preto");

console.log(doberman);
doberman.latir();

// O constructor nada mais é do que a gente instanciar objetos ja com as propriedades definidas
