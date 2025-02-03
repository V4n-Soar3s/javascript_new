class Carro {
    constructor(marca, cor, gasolinaRestante) {
      this.marca = marca;
      this.cor = cor;
      this.gasolinaRestante = gasolinaRestante; // em litros
    }
  
    // Método para dirigir o carro
    dirigir(distancia) {
      const consumoPorKm = 0.2; // Consumo de 0.2 litros por km
      const gasolinaNecessaria = distancia * consumoPorKm;
  
      if (this.gasolinaRestante >= gasolinaNecessaria) {
        this.gasolinaRestante -= gasolinaNecessaria;
        console.log(`Você dirigiu ${distancia} km. Gasolina restante: ${this.gasolinaRestante.toFixed(2)} litros.`);
      } else {
        console.log("Gasolina insuficiente para essa distância. Abasteça o carro.");
      }
    }
  
    // Método para abastecer o carro
    abastecer(litros) {
      this.gasolinaRestante += litros;
      console.log(`Você abasteceu ${litros} litros. Gasolina atual: ${this.gasolinaRestante.toFixed(2)} litros.`);
    }
  }
  
  // Exemplo de uso
  const meuCarro = new Carro("Toyota", "Preto", 10);
  
  meuCarro.dirigir(30); // Tenta dirigir 30 km
  meuCarro.abastecer(20); // Abastece 20 litros
  meuCarro.dirigir(50); // Dirige 50 km
  meuCarro.dirigir(30);
  meuCarro.dirigir(50);