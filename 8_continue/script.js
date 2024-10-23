// continue 



for(let i = 10; i > 0;  i = i -1){//demos inicio há um looping

    if(i % 2 == 0){// informamos a condição que seria qualquer número atribuido a i que seja divisivel por 2 e reste 0 será pulado
        console.log("Caiu no continue");//aqui é para entendermos toda vez que for apresentado um par ele será pulado
        continue;//metodo continue sendo chamado para ignorar quando for par 
    }

    console.log(i);//invocada a variavel par ser apresentada quando for impar 

}