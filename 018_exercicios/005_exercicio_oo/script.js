//crie uma classe conta bancaria
//com as propriedades de saldo na conta corrente, saldo na conta poupança e juros da poupança;
//crie os métodos de depósito e saque, também um método para transferir dinheiro da poupança para a corrente
//além disso crie uma conta especial que herda da conta normal
//na consta especial os juros sao dobrados da conta normal

// Classe Conta Bancaria
class ContaBancaria {
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca) {
      this.saldoCorrente = saldoCorrente;
      this.saldoPoupanca = saldoPoupanca;
      this.jurosPoupanca = jurosPoupanca;
    }
  
    // Método de depósito
    depositar(valor, conta = 'corrente') {
      if (valor <= 0) {
        console.log('O valor do depósito deve ser positivo.');
        return;
      }
      if (conta === 'corrente') {
        this.saldoCorrente += valor;
      } else if (conta === 'poupanca') {
        this.saldoPoupanca += valor;
      }
      console.log(`Depósito de R$${valor} na conta ${conta} realizado com sucesso.`);
    }
  
    // Método de saque
    sacar(valor, conta = 'corrente') {
      if (valor <= 0) {
        console.log('O valor do saque deve ser positivo.');
        return;
      }
      if (conta === 'corrente' && this.saldoCorrente >= valor) {
        this.saldoCorrente -= valor;
        console.log(`Saque de R$${valor} da conta corrente realizado com sucesso.`);
      } else if (conta === 'poupanca' && this.saldoPoupanca >= valor) {
        this.saldoPoupanca -= valor;
        console.log(`Saque de R$${valor} da conta poupança realizado com sucesso.`);
      } else {
        console.log('Saldo insuficiente para saque.');
      }
    }
  
    // Transferir da poupança para a corrente
    transferirParaCorrente(valor) {
      if (valor > 0 && this.saldoPoupanca >= valor) {
        this.saldoPoupanca -= valor;
        this.saldoCorrente += valor;
        console.log(`Transferência de R$${valor} da poupança para a corrente realizada com sucesso.`);
      } else {
        console.log('Saldo insuficiente na poupança para transferência.');
      }
    }
  
    // Aplicar juros na poupança
    aplicarJuros() {
      this.saldoPoupanca += this.saldoPoupanca * this.jurosPoupanca / 100;
      console.log('Juros aplicados na poupança.');
    }
  }
  
  // Classe Conta Especial que herda da Conta Bancaria
  class ContaEspecial extends ContaBancaria {
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca) {
      super(saldoCorrente, saldoPoupanca, jurosPoupanca * 2); // Juros dobrados
    }
  
    // Aplicar juros especiais na poupança
    aplicarJuros() {
      this.saldoPoupanca += this.saldoPoupanca * this.jurosPoupanca / 100;
      console.log('Juros especiais aplicados na poupança.');
    }
  }
  
  // Exemplo de uso
  const contaNormal = new ContaBancaria(1000, 500, 2);
  contaNormal.depositar(200);
  contaNormal.sacar(100);
  contaNormal.transferirParaCorrente(150);
  contaNormal.aplicarJuros();
  console.log(`Saldo corrente: R$${contaNormal.saldoCorrente}, Saldo poupança: R$${contaNormal.saldoPoupanca}`);
  
  const contaVip = new ContaEspecial(2000, 1000, 2);
  contaVip.aplicarJuros();
  console.log(`Saldo corrente (VIP): R$${contaVip.saldoCorrente}, Saldo poupança (VIP): R$${contaVip.saldoPoupanca}`);
  