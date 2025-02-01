/*
Crie uma classe que simula uma conta no banco, utilize a foma que preferir;
Deve conter a propriedade saldo;
E os métodos depósito e saque
Teste os métodos
*/

class Conta{
    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(valor){
        this.saldo += valor;
    }

    saque(valor){
        this.saldo -= valor;
    }
}

let conta = new Conta(1000);// aqui nos instanciamos o objeto

conta.deposito(1000);// depositamos um valor

console.log(conta.saldo);//apresentamos esse valor com o saldo que foi depositado em conta

conta.saque(300);//retiramos um valor 

console.log(conta.saldo);//apresentamos o valor apos a retirada do saque de 300
