//método includes = serve para verificar se um determinado elemento existe dentro do array, se o mesmo existir é retornada a mensagem true se não false 

//criei o array
let racas = ["Poodle", "Beagle", "Buldogue", "Boxer", "Maltês"];

//vamos utilizar o método no console
console.log(racas.includes("Pug"));//retorna false pois nao existe no array
console.log(racas.includes("Beagle"));//retorna true pois existe no array 

if(racas.includes("Beagle")){
    console.log('Este cachorro pertence a Vanessa');
}