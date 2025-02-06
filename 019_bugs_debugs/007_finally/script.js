//finally

//try e catch

//let b = 2;

try {
    let a = 2 + b;//caso retorne algum erro aqui dentro 
  } catch (error) {//é capturado pelo catch
    console.log(error);//e apresentado no console, no caso será apresentado que a variavel b não foi definida
  } finally{
    console.log("Executou");
  }
  
  
  //O try catch diferente do error ele não para o código diferente do error, podemos ver isso utilizando uma leitura no console: 
  //console.log('teste');