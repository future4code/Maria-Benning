/* -------------- - **Exercícios de interpretação de código**
    1. Leia o código abaixo
           function minhaFuncao(variavel) {
        	return variavel * 5
        }

        console.log(minhaFuncao(2))
        console.log(minhaFuncao(10))
        a) O que vai ser impresso no console?  
        // 10  ,  500

        b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função
         `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console? // daria erro

    2. Leia o código abaixo

        let textoDoUsuario = prompt("Insira um texto");

        const outraFuncao = function(texto) {
        	return texto.toLowerCase().includes("cenoura")
        }
         const resposta = outraFuncao(textoDoUsuario)
        console.log(resposta)

        a. Explique o que essa função faz e qual é sua utilidade
        o texto que o usurio imprimiu vai ser retornado em letras maisculas e incluir a palavra cenoura

        b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
             i.   `Eu gosto de cenoura`
             ii.  `CENOURA é bom pra vista`
             iii. `Cenouras crescem na terra`


======================2. Exercicio de escrita de código
1. Escreva as funções explicadas abaixo:
 a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando 
 algumas informações sobre você, como: 
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
Lembrando que a função não possui entradas, apenas imprime essa mensagem. */


/*function imprimeapresentacao(){
console.log("Eu sou Maria, tenho 28 anos, moro em Campina Grande - Pb e sou estudante.")
}
imprimeapresentacao()
*/

// b)  Agora escreva uma função que receba 4 parâmetros que 
//correspondem às informações de uma pessoa:
// o nome (string), a idade (number), a cidade (string) e uma profissão (string). 
//Ela deve retornar uma string que unifique todas 
//as informações da pessoa em uma só mensagem com o template:

//function imprimeapresentacao(nome, idade, cidade, profissao){
//console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
//}    
//imprimeapresentacao("ricardo", 40, "CampinaGrande", "motorista")

// ================2 .Escreva as funções explicadas abaixo ============================

//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
//faça a soma das duas entradas e retorne o resultado. 
//Invoque a função e imprima no console o resultado.
/*
function somaDoisNumeros (num1, num2){
    const soma = num1 + num2
    return soma 
}
const resultado = somaDoisNumeros(4,9)
console.log(resultado)

*/

//b) Faça uma função que recebe 2 números e retorne um booleano que 
//informa se o primeiro número é **maior ou igual** ao segundo.
/*
function doisNumeros(num1, num2){
return num1>=num2  
}
const resultado = doisNumeros(5, 7)
console.log(resultado)
*/


//c) Escreva uma função que receba um número e 
//devolva um booleano indicando se ele é par ou não
function numero(numero1){
    return  numero1%2==0
}
const resultado = numero(8)
console.log = resultado



//d) Faça uma função que recebe uma mensagem (`string`) como parâmetro 
//e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
