// Crie uma classe que simula um carrinho de compras de um e-commerce
// Propriedades: itens, quantidade total, valor total
// Crie os métodos para adicionar e remover itens;

class Carrinho {
    constructor(itens, qtdTotal, valorTotal) {
      this.itens = itens;
      this.qtdTotal = qtdTotal;
      this.valorTotal = valorTotal;
    }
  
    // Método para adicionar itens ao carrinho
    addItem(item) {
      let contador = 0; // Contador para verificar se o item já existe
  
      // Verificar se o item já existe no carrinho
      for (let itemCarrinho in this.itens) {
        if (this.itens[itemCarrinho].id == item.id) {
          this.itens[itemCarrinho].qtd += item.qtd; // Adiciona a quantidade
          contador = 1; // Marca que o item já existe
        }
      }
  
      // Se o item não existir, adiciona ao array de itens
      if (contador == 0) {
        this.itens.push(item);
      }
  
      // Atualiza a quantidade total e o valor total do carrinho
      this.qtdTotal += item.qtd;
      this.valorTotal += item.preco * item.qtd;
    }
  
    // Método para remover itens do carrinho e retornar o valor removido
    removeItem(item) {
      for (let itemCarrinho in this.itens) {
        if (this.itens[itemCarrinho].id == item.id) {
          let obj = this.itens[itemCarrinho];
          let index = this.itens.findIndex(function(obj) {
            return obj.id == item.id;
          });
  
          // Subtrai a quantidade e o valor do item removido
          this.qtdTotal -= this.itens[itemCarrinho].qtd;
          this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;
  
          // Armazena o valor removido antes de deletar
          let valorRemovido = this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;
  
          // Remove o item do array
          this.itens.splice(index, 1);
  
          // Retorna o valor removido
          return valorRemovido;
        }
      }
  
      // Se o item não for encontrado
      return 0;
    }
  }
  
  // Instanciando um carrinho com itens iniciais
  let carrinho = new Carrinho(
    [
      { id: 1, nome: "Camisa", qtd: 1, preco: 20 },
      { id: 2, nome: "Calça", qtd: 2, preco: 50 },
      { id: 3, nome: "Chapéu", qtd: 1, preco: 35 },
    ],
    4,
    155
  );
  
  console.log(carrinho); // Mostra o carrinho inicial
  
  // Adicionando mais camisas (item existente)
  carrinho.addItem({ id: 1, nome: "Camisa", qtd: 2, preco: 20 });
  console.log(carrinho);
  
  // Adicionando um novo item (Tênis)
  carrinho.addItem({ id: 4, nome: "Tênis", qtd: 1, preco: 200 });
  console.log(carrinho);
  
  // Removendo a camisa e mostrando o valor removido
  let valorRemovido = carrinho.removeItem({ id: 1, nome: "Camisa", qtd: 1, preco: 20 });
  console.log(`Valor removido: R$${valorRemovido}`);
  
  console.log(carrinho); // Mostra o carrinho atualizado após a remoção
  