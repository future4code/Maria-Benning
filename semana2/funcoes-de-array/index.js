//===== Exercícios de interpretação de código================
//1. a)) vão ser impresso os nome e os apelidos dos usuarios
//2. a)) vai imprimir apenas os nomes dos usuários
//3. a)) todos os apelidos que não forem "CHIJO"


//========Exercícios de escrita de código===================

//1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
//realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
/*

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]
// a) Crie um novo array que contenha apenas o nome dos doguinhos

const novoArray = pets.map((item, index, array) => {
    return item.nome
})

console.log(novoArray)


// b) Crie um novo array apenas com os cachorros salsicha

const novoArrayA = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})

console.log(novoArrayA)


// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

const arrayMensagem = (item) => {
    if (item.raca === "Poodle") {
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
    }
}
const poodle = pets.filter(arrayMensagem)
console.log(poodle)

*/ 

//2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando
 // as funções de array map e filter:

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a) a) Crie um novo array que contenha apenas o nome de cada item


   const nomeDosProdutos = produtos.map((item, index, array) => {
    return item.nome
})

console.log(nomeDosProdutos)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
//aplicando 5% de desconto em todos eles


const nomeEprecoProdutos = produtos.filter((produtos) => {
return {nome: produtos.nome, preco: produtos.preco - produtos.preco * 0.05}
})
console.log(nomeEprecoProdutos)




// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const nomeDasBebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})

console.log(nomeDasBebidas)




// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"



const marca = (item,index, array) => {
 return item.nome.includes("Ypê")
}

const nomeMarca = produtos.filter(marca)
console.log(nomeMarca)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const fraseProdutoYpe = nomeMarca.map((produto) => {
return console.log(`Compre ${produto.nome} por ${produto.preco}.`)
})

console.log(fraseProdutoYpe)