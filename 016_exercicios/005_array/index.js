/*Crie um array com 5 nomes, incluindo o seu, verifique se o seu nome existe no array, se existir imprima alguma mensagem no console */

let nomes = ["Bruna", "Vanessa", "Guilherme", "Carlos", "Adriana"];

if (nomes.includes("Vanessa")) {
  console.log(`O nome ${nomes[1]} consta na lista`);
}

if (nomes.includes("Ana")) {
  console.log(`Este nome existe na lista`);
} else {
  console.log(`Este nome não existe na lista`);
}
