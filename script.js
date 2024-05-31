const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const soma_total = numeros.reduce((acc, num) => acc + num, 0);


console.log(`A soma de todos os elementos do array é: ${soma_total}`);


const pares = numeros.filter(num => num % 2 === 0);
console.log(`Os números pares do array são: ${pares}`);


const quadrados = numeros.map(num => num * num);
console.log(`Os quadrados dos números do array são: ${quadrados}`);



class Produto {

    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    vender(quantidadeVendida) {
        if (quantidadeVendida <= this.quantidade) {
            this.quantidade -= quantidadeVendida;
            console.log(`${quantidadeVendida} unidades de ${this.nome} vendidas.`);
        } else {
            console.log('Estoque insuficiente');
        }
    }


    repor(quantidadeReposta) {
        this.quantidade += quantidadeReposta;
        console.log(`${quantidadeReposta} unidades de ${this.nome} repostas.`);
    }

    mostrarEstoque() {
        console.log(`O produto ${this.nome.toUpperCase()} possui ${this.quantidade} unidades disponíveis`);
    }


    atualizarPreco(novoPreco) {
        this.preco = novoPreco;
        console.log(`O preço do produto ${this.nome.toUpperCase()} foi atualizado para R$ ${this.preco.toFixed(2)}`
        );
    }
}



// Exemplo de uso:
const produto = new Produto('Arroz', 20.99, 10);

// Mostrar estoque inicial
produto.mostrarEstoque(); // O produto ARROZ possui 10 unidades disponíveis.

// Vender 3 unidades
produto.vender(3); // 3 unidades de Arroz vendidas.

produto.mostrarEstoque(); // O produto ARROZ possui 7 unidades disponíveis.

// Tentar vender 8 unidades (deve falhar)
produto.vender(8); // Estoque insuficiente

produto.mostrarEstoque(); // O produto ARROZ possui 7 unidades disponíveis.




// Repor 5 unidades
produto.repor(5); // 5 unidades de Arroz repostas.

produto.mostrarEstoque(); // O produto ARROZ possui 12 unidades disponíveis.


// Atualizar preço
produto.atualizarPreco(25.49); // O preço do produto ARROZ foi atualizado para R$ 25.49

produto.mostrarEstoque(); // O produto ARROZ possui 12 unidades disponíveis.

