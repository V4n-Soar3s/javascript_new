//como preencher o texto de um elemento por meio do DOM 

//vamos acessar o paragrafo sem texto 
let pSemTexto = document.getElementById("sem-texto");
//e vamos criar o conteúdo do texto (nó de texto)
let texto = document.createTextNode("Inserir esse texto");

pSemTexto.appendChild(texto);//agora estamos inserindo o texto no elemento do html utilizando appendChild
