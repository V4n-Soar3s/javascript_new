//metodo join

//Ele puxa os elementos do array e cria uma frase com o separador que nos escolhermos. 

//criei uma string 
let frase = "Testando o método split";

let palavras = frase.split(" ");// aqui eu criei uma variavel chamada palavras que vai receber o valor armazenado na variavel frase e a cada espaço será dividido  

let novaFrase = palavras.join("@");//aqui utilizando o método join solicitamos que seja recriada a frase com o separador @

console.log(novaFrase);// quando solicitamos que seja exibida a frase sera apresentada a mensagem com o separador @

console.log(palavras.join(" "));//aqui utilizando o método join fazemos com que as palavras voltem a apresentar a mensagem original utilizando espaço como separador