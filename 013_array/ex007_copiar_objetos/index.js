//Podemos copiar todas as propriedades de um objeto para outro, veja: 

//criei o objeto
let carro = {
    portas: 2,
    portamalas: '200L',
    motor: '2.0',
}

//criei o objeto que terá as propriedades que serão copiadas para o primeiro objeto
let adicionais = {
    tetoSolar: true, 
    arCondicionado: true,
}

//quando eu chamo essa primeira vez sem ter passado pelo método assign ele so ira apresentar 3 propriedades
console.log(carro);

//Como adicionar as propriedades do segundo objeto no primeiro ex:
Object.assign(carro, adicionais); //aqui eu disse que o carro vai ter os adicionais 

//quando eu chamar o objeto carro irá ser apresentado com as propriedades copiadas do adicionais por conta do metodo assign utilizado, veja:
console.log(carro);

