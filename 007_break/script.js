//break

let nome = "Matheus";//declarei a variavel atribuindo seu valor como Matheus


for(let i = 0; i < 10; i = i + 1){//Dentro do looping a variavel será modificada no momento em que chegar a três

    if(i == 3){
        nome = "João"
    }
//o comando for irá parar de ser executado a partir do momento que chegar em i == 5 e o nome tiver sido atribuido a joao onde sairemos do looping de repetição
    if(i == 5 && nome == "João"){
        console.log("O nome é João, pode parar.")
        break;//vamos sair e dar um break 
    }

    console.log(i);//declaramos para exibir i até o momento que as condições nao forem atendidas

}