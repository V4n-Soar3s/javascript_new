//reject

function verificarNumero(num){
    return new Promise((resolve, reject) => {//vamos instanciar uma promessa com os parametros resolve e reject
        if (num == 2) {
          resolve(console.log(`O número é ${num}`));
        } else {
          reject(new Error("Falhou"));
        }
      });
}

verificarNumero(2);
verificarNumero(1);