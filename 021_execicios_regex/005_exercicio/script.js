const validarNomeUsuario = /^(?=.{3,16}$)[a-z-0-9-_]/;//com essa sequencia estamos informando que vamos ter ao menos tres caracteres e no maximo 16, depois iremos inserir nosso segundo grupo onde recebemos os caracteres que sao possiveis neste cara

console.log(validarNomeUsuario.test("van_195"));

