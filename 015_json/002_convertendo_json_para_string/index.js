//Convertendo json para string 

//criamos o json 
let pessoa = {
    "nome": "Vanessa",
    "idade": 29,
    "cidade": "São Paulo", 
    "profissao": "Analista de Suporte Técnico - N1",
    "hobbies": ["Video game", "Leitura"]
}

//vamos supor que precisamos enviar texto para o servidor, iremos utilizar: 
let pessoaTexto = JSON.stringify(pessoa);//o metodo stringfy faz com que o json seja convertido para string

console.log(pessoaTexto);// quando for exibido no navegador se torna uma string, não há mais a estrura de um objeto e a partir do momento que ele é uma string ele perde as propriedade de um objeto. 

let pessoaJSON = JSON.parse(pessoaTexto);//e aqui transformamos o pessoaTexto em json novamente assumindo sua estrutura de objeto mais uma vez, vide: 

console.log(pessoaJSON);//solicitei que seja apresentado o objeto
console.log(pessoaJSON.hobbies[0]);//solicitei que seja apresentado uma das propriedades dentro do objeto jason e o que esta dentro dela no indice 0 