// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
/*
function soma(num1, num2) {
  // implemente sua lógica 

  return num1 + num2
}
console.log(soma (3, 6))




// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}
console.log(imprimeMensagem)


// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt("digite altura")
  const largura = prompt("digite largura")
  const resultado = altura * largura
 console.log(resultado)
 }

 calculaAreaRetangulo()



   // EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("em que ano estamos?"))
const anoNascimento = Number(prompt("em que ano você nasceu?"))
const resultado = anoAtual - anoNascimento
console.log(resultado)
}
imprimeIdade()

EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const kilos = 85
  const metros = 1.8
  return  peso / (altura*altura)
} 

console.log(calculaIMC (85, 1.68))



// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt("Qual seu nome?")
const idade = prompt("qual sua idade?")
const email = prompt("qual seu email?")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

imprimeInformacoesUsuario()



// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("digite sua cor favorita")
const cor2 = prompt("digite a segunda cor favorita")
const cor3 = prompt("digite a terceira cor favorita")
const cores = [cor1, cor2, cor3]
console.log(cores)
}
imprimeTresCoresFavoritas()



// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
 const frase = "oi"
return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const custoTotal = 3000
const valorCadaIngresso = 100
return custo / valorIngresso

}



// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const nome1 = "ola"
  const nome2 =  "abc"
return string1 >= string2
} 



// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
const elemento = [1, 2, 3]
return array[0]

}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const elemento = ["laranja", "banana", "maça"]
  return array[array.length -1]
}




// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const elemento = [1, 2, 3, 4, 5]

}


*/


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const nome1= "Ola"
const nome2 = "olA"
return  string1 !== string2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}