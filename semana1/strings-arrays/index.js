/* ===========EXERCICIO INTERPRETAÇÃO DE CÓDIGO==============
1 . indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array) // INDEFINIDO, POIS O ARRAY ESTÁ VAZIO 

array = null
console.log('b. ', array) //  VALOR NULO


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // 11

let i = 0
console.log('d. ', array[i]) // 3

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)*/

// ------------------------------------------------

// 2. Leia o código abaixo com atenção
//const frase = prompt("Digite uma frase")
//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// Qual será o valor impresso no console se a entrada do usuário for: 
//"Subi num ônibus em Marrocos"?        //"SUBI NUM ÔNIBUS EM MIRROCOS" 29

// -----------------Exercícios de escrita de código_____________________________
//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
//Em seguida, imprima na tela a seguinte mensagem:
//  O e-mail `emailDoUsuario` foi cadastrado com sucesso.
// Seja bem-vinda(o), `nomeDoUsuario`!

//const nome = prompt("qual seu nome?")
//const email = prompt("qual seu e-mail?")

//console.log(`O e-mail ${email} foi cadastrado com sucesso! seja bem vindo ${nome}`)

// ---------------------------------------------
//2. Faça um programa que contenha um array com 5 das suas comidas preferidas,
// armazenado em uma variável. Em seguida, siga os passos:

//const comida = [ "macarrao", "pastel", "verduras", "feijao", "pizza"]
//a) Imprima na tela o array completo
// //console.log(comida)

//b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", 
//seguida por cada uma das comidas, **uma embaixo da outra**.

//console.log(`Essas são as minhas comidas preferidas:`)
//console.log(comida[0])
//console.log(comida[1])
//console.log(comida[2])
//console.log(comida[3])
//console.log(comida[4])


//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
//const novaComida = prompt("qual sua comida preferida?") 

//Troque a segunda comida da sua lista pela inserida pelo usuário. 
//comida[1] = novaComida
//console.log(comida)
//const comida = [ "macarrao", "arroz", "verduras", "feijao", "pizza"]


//Imprima na tela a nova lista
//console.log(comida)
// -------------------------------------------------------------

//3. faça un programa, seguindo os passos;

//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
// const listaDeTarefas = []

//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, 
//uma por uma, no array
// const  listaDoUsuario1 = prompt("qual tarefa deseja realizar?")
//const listaDoUsuario2 = prompt("qual  outra tarefa deseja realizar?")
//const listaDoUsuario3 = prompt("qual  outra tarefa deseja realizar?")

//const const listaDoUsuario4 = [ "estudar", "treinar", "dormir"]
// console.log(const listaDoUsuario4)
//c) Imprima o array na tela

// const const listaDoUsuario = [ "estudar", "treinar", "dormir"]
//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
/*
const listaDoUsuario = [ "estudar", "treinar", "dormir"]
const tarefaEscolhida = Number(prompt("digite o indice da tarefa que ja realizou;: 0, 1 ou 2 "))
console.log("tarefa escolhida:", listaDoUsuario[tarefaEscolhida])*/
//e) Remova da lista o item de índice que o usuário escolheu.
//f) Imprima o array na tela
//const listaDoUsuario = [ "estudar", "treinar", "dormir"]
//console.log(listaDoUsuario.splice (1, 1), listaDoUsuario)



//exercicio 3 ( resolvido de outra forma)
// a
//const listaDeTarefas = []
// b
//const primeiraTarefa = prompt("digite uma tarefa")
//const segundaTarefa = prompt("digite uma tarefa")
//const terceiraTarefa= prompt("digite uma tarefa")

//listaDeTarefas.push(primeiraTarefa)
//listaDeTarefas.push(segundaTarefa)
//listaDeTarefas.push(terceiraTarefa)
// c
//console.log(listaDeTarefas)

// d
//const tarefaRealizada = prompt("digite o índice de uma tarefa que realizou: 0, 1 ou 2")
//listaDeTarefas.splice(Number(tarefaRealizada), 1)
//console.log(listaDeTarefas)




















