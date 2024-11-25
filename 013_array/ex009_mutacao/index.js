//mutação 

let pessoa = {//criei meu primeiro objeto
    nome: 'Vanessa',
}

let pessoa2 = pessoa;//aqui eu disse que o segundo objeto é igual o primeiro ou seja tem o mesmo valor criando uma referencia ao objeto antigo 

let pessoa3 = {
    nome: 'Vanessa',
}

console.log(pessoa == pessoa2);//se imprimirmos essa comparação vamos ver que retorna a mensagem true pois o valor é identico ao anterior 

console.log(pessoa3 ==  pessoa);//neste caso retorna false, pois, o primeiro objeto tem referencia ao segundo e já teve o seu valor alterado várias vezes

console.log(pessoa3 == pessoa2);//retorna false pelo mesmo motivo

pessoa2.nome = 'Pedro';//aqui eu modifiquei o valor de pessoa2 logo o primeiro objeto também receberá esse valor porque é referência de ambos

console.log(pessoa.nome);// será apresentada a mensagem Pedro no console pq quando eu mexo em um objeto que é referência do outro automaticamente o valor dos dois mudam 

pessoa.nome = 'Maria';//aqui eu alterei o valor do primeiro objeto logo o segundo também será alterado devido a referência 

console.log(pessoa2.nome);//será apresentada a mensagem Maria, pois, o primeiro objeto foi alterada logo esse também muda essa é a questão da mutabilidade 


