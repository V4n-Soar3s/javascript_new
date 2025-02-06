//exception

//iremos criar uma função para saudar o usuario
function saudacao(nome) {
  //dentro da função definimos a condição se o tipo do valor recebido for diferente de string retornará um erro criado pelo desenvolvedor do código oberve
  if (typeof nome != "string") {
    throw new Error("O parâmetro nome precisa ser string"); //se inserir um valor que não seja string irá apresentar essa mensagem no console
  } else {// se não o programa funcionará normalmente 
    console.log(`Olá ${nome}`);
  }
}

saudacao('Vanessa');
//saída: Vanessa
saudacao(3);
//Saída: aqui é apresentado o erro e aborta a execução do programa
console.log('teste');
//não será apresentado devido ter sido abortada a execução do programa 
