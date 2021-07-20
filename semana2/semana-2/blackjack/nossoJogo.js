/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


//1- Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!".

//const mensagem = "Seja bem vindo(a) ao jogo Blackjack!"
//console.log(mensagem)

//2-Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?".
//3-Se o usuário responder cancel, imprime uma mensagem no console "O jogo acabou".
//4 - Se o usuário responder Ok, o programa deve iniciar uma nova rodada. 
//5-5 - Nós preparamos um método que permite sortear uma carta. 
//Ele já está pronto e você só precisa invocá-lo. 
//Cada carta sorteada é um objeto com duas propriedades: 
//um texto que representa o que é escrito na carta; e um valor que mostra a pontuação da carta. 
   





const jogoBlackjack =(cartas) => {
   if (confirm("Quer iniciar uma nova rodada?"))  {
      console.log("Seja bem vindo(a) ao jogo Blackjack!")
   } else {
      console.log("O jogo acabou!")
   }
   }
 jogoBlackjack()

 let comecandoRodada = () => {
const cartaUsuario =  [comprarCarta(), comprarCarta()]
const cartaComputador = [comprarCarta(), comprarCarta()]

console.log(`Usuario - cartas: ${cartaUsuario[0].texto} ${cartaUsuario[1].texto} 
- pontuação ${cartaUsuario[0].valor} + cartaUsuario[1].valor}`);
console.log(`Usuario - cartas: ${cartaComputador[0].texto} ${cartaComputador[1].texto} 
- pontuação ${cartaComputador[0].valor} + cartaComputador[1].valor}`);

if (cartaUsuario > cartaComputador) {
   console.log (' O usuario ganhou')
   } else if (cartaUsuario < cartaComputador) {
      console.log(' O computador ganhou!')
   } else {
      console.log('Empate')
   }
}

comecandoRodada()

