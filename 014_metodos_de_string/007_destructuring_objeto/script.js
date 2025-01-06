//estrutura destructuring 

//vamos criar um objeto 

let obj = {// e dentro dele existirão características que são as propriedades deste objeto
    rodas: 4,
    portas: 4, 
    tetoSolar: true,
    motor: '2.0'
}

//Caso a gente queira separar todas as propriedades em variaveis podemos utilizar o destructuring, vide: 

const {rodas: vRodas, portas: vPortas, tetoSolar: vTetoSolar, motor: vMotor } = obj;// aqui criamos constantes com os valores que estao no objeto

console.log(vRodas);//aqui podemos acessar elas individualmente pois criamos constantes para cada uma das propriedades dentro do objeto
console.log(vMotor);//aqui podemos acessar elas individualmente pois criamos constantes para cada uma das propriedades dentro do objeto
