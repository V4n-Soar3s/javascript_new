//switch

//primeiro declaramos uma var

let nome = "Pedro";

//criaremos um switch que irá trabalhar em cima do nome e dentro dele teremos os cases
switch(nome){
    case "Matheus"://se o nome for Matheus ele irá executar o comando abaixo
        console.log("O nome é Matheus");
        break;//aqui damos o break para ele parar de executar o código caso a condição acima seja atendida
    case "João"://se o nome for João ele irá executar o comando abaixo
        console.log("O nome é João");
        break;//aqui damos o break para ele parar de executar o código caso a condição acima seja atendida
    default://criamos o default para caso nenhuma das condições seja atendidade, será apresentada a mensagem abaixo 
        console.log("O nome não foi encontrado")
        break;//aqui damos o break para ele parar de executar o código caso a condição acima seja atendida
}

//utilizando if o tamanho do código seria menor e visualmente mais bonito além de que se por ventura eu esquecer o break  no switch case ambos os comandos serão executados. SWITCH normalmente é mais bonito para quando estamos realizando muitas verificações seguidas, mas o if é mais funcional. 