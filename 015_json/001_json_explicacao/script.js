//JSON = JAVASCRIPT OBJECT NOTATION 

/*
- Se parece muito com object do javascript;
- Seve para comunicar entre api's ou receber dados via api's;
- E é uma padronização do tipo de dado para que possamos nos comunicar entre os serviços;
- A sintaxe do JSON é diferente do object, devemos declarar da seguinte forma, tudo dentro de chaves e os parametros dentro de aspas duplas, segue exemplo: 

{
    "name": "Matheus", 
    "age": 29, 
    "position": "Developer"
}

E da mesma forma que temos objetos também conseguimos acessar as propriedades neste caso, basicamente é um conjunto de propriedades e valor que nao possui métodos, somente nome de dado e valor

 */

//criando um json 
let pessoa = {
    "nome": "Vanessa",
    "idade": 29,
    "cidade": "São Paulo", 
    "profissao": "Analista de Suporte Técnico - N1"
}

//COMO ACESSO A PROPRIEDADE DE UM JSON? IGUAL OBJETO, VEJA: 

console.log(pessoa.nome);
console.log(pessoa.profissao);

//é um tipo de dado que serve para comunicação entre servidor e front end, podemos receber arquivos de JSON  e ler esses arquivos e tranformar em dados para nós 