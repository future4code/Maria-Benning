/* -------Exercícios de interpretação de código-----
Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, 
pode rodar no seu computador para analisar e pensar sobre o resultado. 
1 ===========
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

a) Explique o que o código faz. Qual o teste que ele realiza? 
///  o códido pede um  numero  ao usuário, e verifica se o resto da divisão 
desde numero é igual a zero, se for (imprime: passou no teste)
se não ( imprime: não passou teste).

b) Para que tipos de números ele imprime no console "Passou no teste"? 
// números pares!

C) Para que tipos de números a mensagem é "Não passou no teste"? 
// números impares!


2.===================
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)



a) Para que serve o código acima?

// para pesquisar o preço de uma fruta escolhida pelo usuário

b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
//   2.25

c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem 
impressa no console se retirássemos o break que está logo acima do default 
(o break indicado pelo comentário "BREAK PARA O ITEM c.")?
// seria impresso o preço da pera, 5.5

3. =======================================
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) O que a primeira linha está fazendo?
// se o numero que o usuario digitou é maior que zero.

b) Considere um usuário digitou o número 10. 
Qual será a mensagem do terminal? //  passou no teste
E se fosse o número -10? // não vai imprimir nenhma mensagem no console

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// sim! a variavel que declarada deveria estar no escopo global

=======================Exercícios de escrita de código====================
1. Faça um programa que pergunta ao usuário qual a idade dele 
e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`


const idade = Number(prompt("digite sua idade"))
if (idade >= 18) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir.")
}
2. Agora faça um programa que verifica que turno do dia um aluno estuda. 
Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno).
 Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 
 Utilize o bloco `if/else` 
 

const turno = prompt("digite seu turno:M, V ou N")
 const turnoUsuario =(matutino, vespertino, noturno) => {
    if (turno === "M") {
        console.log("Bom dia!")
    } else if (turno === "V") {
        console.log("Boa tarde!")
    } else if (turno ==="N" ) {
        console.log("Boa noite!")
    }
}
turnoUsuario()
3. =========================================================================
Repita o exercício anterior, mas utilizando a estrutura de switch case agora.


const turno = prompt("digite seu turno:M, V ou N")
switch (turno) {
        case 'M' :
        console.log("Bom dia!")
            break
        case 'V' :
        console.log("Boa tarde!")
            break
        case 'N' :
        console.log("Boa noite!")
            break
            default:
                console.log("digite seu turno:M, V ou N")
    }


4.============================================================================
Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a 
um filme com você se ele for do gênero fantasia  **e** se o ingresso está abaixo de 15 reais. 

Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir 
e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga 
vai topar assistir o filme. 

Caso positivo, imprima no console a mensagem:
 `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`


const filme = prompt("qual gênero vai querer assistir?")
const valor = Number(prompt("qual valor do ingresso?"))

const resposta = (filme, valor) => {
    if (filme === "fantasia" && valor <= 15 ) {
        console.log("Bom filme!")
    } else{
    console.log("escolha um bom filme!")
    }
}
resposta(filme, valor)


*/
