/*Exercicio 004
- Adicione a propriedade janelas no ônibus, com o valor 20;
- Delete a propriedade rodas;
- Imprima a propriedade janelas no console

*/ 

//criei o objeto
let onibus = {
    rodas: 8, 
    limitePassageiros: 40, 
    portas: 2
};

//deletei a propriedade rodas
delete onibus.rodas;


//adicionei a propriedade janelas ao objeto
onibus.janelas = 20;

//solicitei que seja impressa a propriedade janela no console
console.log(onibus.janelas);
console.log(onibus.rodas);//sera apresentada a mensagem undefined pois esta propriedade foi excluida 
console.log(onibus)

