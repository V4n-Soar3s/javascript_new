/*
Identação

- Serve para organizar o código e deixar mais legível;
- Não há uma regra, porém cada bloco aninhado deve ser identado uma vez;
- Pessoa vão te agradecer no futuro por identar o código;
- Para a execução do código não afeta em nada;

*/

let x = 0;//Neste caso não precisamos aninhar porque estão no mesmo bloco
let y = 0;//Neste caso não precisamos aninhar porque estão no mesmo bloco

if(x == 0 && y == 0){
    let z = 5;
    if(z > 2){
        console.log(z);
        for(i = 0; i < 5; i = i + 1){
           console.log(i);
           if(i == 2) {
            console.log("i é = 2")
           }
        }
    }
}

