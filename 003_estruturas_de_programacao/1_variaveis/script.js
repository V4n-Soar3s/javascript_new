let nome = "Vanessa"; // declarei uma variavel 

console.log(nome);//chamei a variavel para ser apresentada no console 
console.log(`Meu nome é ${nome}`)// imprimindo o valor da variavel no console utilizando template literals

let laranjas = 5;// declarei uma variavel 
console.log(laranjas * laranjas);//chamei a variavel para ser apresentada no console multiplicando seu valor 

// como mudar o valor de uma variavel ja criada durante o programa 

nome = "Bruna";// atribuimos um novo valor ao nome

console.log(nome);// sera exibido o novo valor 

laranjas = laranjas + 1;// sera atribuido +1 na variavel anterior que era igual a 5

console.log(laranjas);// sera exibido o novo valor 6

//podemos tbm no JS mudar o tipo da variavel, exemplo: 

laranjas = "Laranja";//mudamos o tipo para string

console.log(laranjas);//mudei o valor e o tipo para string 

//declarações de multiplas variaveis:
let um = 1, dois = 2, tres = 3;// foram declaradas tres variaveis numa só linha (nao é recomendado utilizar porém é possivel)

console.log(um + dois + tres);// solicitei que seja impresso a soma de todas as variaveis declaradas

