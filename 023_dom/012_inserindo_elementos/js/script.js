//cromo criar um elemento atraves do DOM para inserir no HTML 

//vamos criar uma lista para inserir no HTML 
let lista = document.createElement('ul');

//e podemos criar um for para definir quantos itens teremos na lista exemplo: 
for(i = 1; i < 6; i++){

   //vamos criar os itens
    let item = document.createElement('li');
    
    //podemos também ter um texto 
    let texto = document.createTextNode("texto lista " + i);

    //aqui estamos inserindo o texto no item 
    item.appendChild(texto);

    lista.appendChild(item);//neste caso teremos uma lista com cinco itens 

}

//depois disso podemos encotrar uma div 
let container = document.getElementById('container-principal');
//e inserir a lista dentro do container
container.appendChild(lista);