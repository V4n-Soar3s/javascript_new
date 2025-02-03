//Crie um objeto que simula um endereço de um cliente;
//Propriedades: rua, bairro, cidade e estado;
//No constructor o endereço já deve ser definido por completo;
//crie métodos para atualizar todas as propriedades;

//classe que simula o endereço de um cliente
class EndCliente{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    //método para atualizar a rua
    atualizarRua(novaRua){
        this.rua = novaRua;
    }

    //método para atualizar bairro
    atualizarBairro(novoBairro){
        this.bairro = novoBairro;
    }

    //método para atualizar cidade
    atualizarCidade(novaCidade){
        this.cidade = novaCidade;
    }

    //método para atualizar estado
    atualizarEstado(novoEstado){
        this.estado = novoEstado;
    }

    //método para atualizar todos os dados de uma vez
    atualizarEnderecoCompleto(novaRua, novoBairro, novaCidade, novoEstado){
        this.rua = novaRua;
        this.bairro = novoBairro;
        this.cidade = novaCidade;
        this.estado = novoEstado;
    }

    //Método para exibir o endereço completo 
    getEnderecoCompleto(){
        return `${this.rua}, ${this.bairro}, ${this.cidade} - ${this.estado}`;
    }
}

//criando um objeto com o endereço já definido
let enderecoCliente = new EndCliente("Rua Pedro Vaz Rego", "Zona Norte", "São Paulo", "SP");

console.log(enderecoCliente.getEnderecoCompleto());
//Saída: Rua Pedro Vaz Rego, Zona Norte, São Paulo - SP

//Atualizando apenas a rua
enderecoCliente.atualizarRua("Rua Paulo Lemore");

//Atualizando apenas o bairro
enderecoCliente.atualizarBairro("Zona Sul");

console.log(enderecoCliente.getEnderecoCompleto());
//Saída: Rua Paulo Lemore, Zona Norte, São Paulo - SP

//atulizando todo o endereco
enderecoCliente.atualizarEnderecoCompleto("Rua Nova", "Rio Branco", "Barra Funda", "SP");

console.log(enderecoCliente.getEnderecoCompleto());
//Saída: Rua Nova, Rio Branco, Barra Funda - SP