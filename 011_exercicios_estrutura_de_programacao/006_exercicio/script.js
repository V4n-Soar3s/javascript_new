let idade = 15;
let possuiCnh = true;

if (idade >= 18 && possuiCnh == false) {
  console.log(`Você não possui CNH, portanto não pode dirigir`);
} else if (idade >= 18 && possuiCnh == true) {
  console.log(`Você está apto a dirigir`);
} else {
  console.log(`Você não pode dirigir`);
}
