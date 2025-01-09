let frutas = ["maçã", "banana", "uva", "caqui", "morango", "abacaxi"];
let legumes = ["cenoura", "beterraba", "batata"];

function verificaQuantidadeElementos(arr) {
  if (arr.length >= 5) {
    console.log("Muitos elementos");
  } else {
    console.log("Poucos elementos");
  }
}

// Chamando a função para verificar cada array
verificaQuantidadeElementos(frutas); // Deve imprimir "Muitos elementos"
verificaQuantidadeElementos(legumes); // Deve imprimir "Poucos elementos"
