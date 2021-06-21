// =======Exercícios de interpretação de código=======

// 1----------------------
/*
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])


// a) O que vai ser impresso no console?
Matheus Nachtergaele, 
Virginia Cavendish, 
canal: "Globo", horario: "14h"

// 2-------------------------------
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
// a) O que vai ser impresso no console?

//nome:"Juca", idade: 3, raca: "SRD"}
//nome: "Juba", idade: 3, raca: "SRD"}
//nome: "Jubo", idade: 3, raca: "SRD"

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// copia o objeto anterior

// 3 -----------------------------------------------
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?
false
undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
 não foi declarada  propriedade altura.


// ===============Exercício de escrita de código=======================

// a) Crie um objeto. Ele deve conter duas propriedades: 
//nome (string) e apelidos (um array que sempre terá exatamente três apelidos).
//Depois, escreva uma função que recebe como entrada um objeto
//e imprime uma mensagem no modelo abaixo:  */


const pessoa = {
    nome: "Maria",
    apelidos: ["Mariazinha", "Mary", "Mah"]
    
}

//console.log(` "Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, 
//${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}"`)


/*b) Agora, usando o operador spread, crie um novo objeto mantendo o valor 
da propriedade nome, mas com uma nova lista de três apelidos. 
Depois, chame a função feita no item anterior passando como argumento o novo objeto  

const apelidosNovos = {...pessoa, apelidosNovos: ["Maricota", "Mama", "Magal"]}
console.log(pessoa, apelidosNovos)  */

// 2 ==============================================================
// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 


const pessoa1 = {
    nome: "Alberiza",
    idade: 34,
    profissao: "Costureira",
  }

const pessoa2 = {
    nome: "Almonize",
    idade: 29,
    profissao: "Professora",
}



//  b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:


const pessoas = (pessoa1, pessoa2) => {
const retornarPessoas = [pessoa1.nome, pessoa1.idade, pessoa1.profissao, pessoa2.nome, pessoa2.idade, pessoa2.profissao]
return retornarPessoas
}
console.log(pessoas(pessoa1, pessoa2))



// 3 ================
// a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
const carrinho = []



// b) Crie três novos objetos que representem frutas de um sacolão. 
//Eles devem ter as seguintes propriedades: nome (`string`) 
//e disponibilidade (`boolean` - devem começar como `true`)

const fruta1 = {
nome: "banana" ,
disponibilidade: true,
}
const fruta2 = {
    nome: "abacaxi" ,
    disponibilidade: true,
    
}


const fruta3 = {
nome: "pera",
disponibilidade: true
}


// c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a 
//dentro do array de carrinho. Invoque essa função passando os três objetos criados.

const adicionarFrutas = (fruta1, fruta2, fruta3) => {

carrinho.push(fruta1, fruta2,fruta3)

}
adicionarFrutas(fruta1, fruta2,fruta3)
console.log(carrinho)
// d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 

console.log(carrinho)



