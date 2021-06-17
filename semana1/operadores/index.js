/* exercico 2. 
Seu colega se aproxima de você falando que o código dele não funciona como devia.  
Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    const soma = primeiroNumero + segundoNumero

    console.log(soma)
   exercicio 3
   resposta: não precisa colocar "", pois variaveis tipo numero são declaradas com numero 
 */

    /* let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    const soma = primeiroNumero + segundoNumero */
// exercio de codigo 1



    /*let idade = Number(prompt ("qual é sua idade"));
    let idade2 = Number(prompt( " qual idade do seu melhor amigo"));
    console.log("sua idade é maior do que a do seu amigo?", idade > idade2)
    console.log(idade - idade2) 


    exercicio de codigo 2

    a) Peça ao usuário que insira um número **par**
    b) Imprima na console **o resto da divisão** desse número por 2.
    c) Teste o programa com diversos números pares. Você notou um padrão? 
    Escreva em um comentário de código.
    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código */


 /*let usuario = Number(prompt ("insira um numero par"));
  console.log( usuario % 2)*/  

  // sim, numero pares tem o mesmo resultado de teste
// o resto da divisão d numeros impares é diferente


// exercicio 3
// Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console
//a) A idade do usuário em meses
//b/) A idade do usuário em dias
// c) A idade do usuário em horas

// let idade = Number(prompt ("qual é sua idade"));
//console.log(idade*12)= 338 meses 

//console.log(idade*365) = 10220 dias

//console.log(idade*8640) = 241920

/* exercicio 4. Faça um programa que pergunte ao usuário dois números. 
Em seguida, faça as operações e imprima no console as seguintes mensagens:
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true */

/*let num1 = Number(prompt ( "insira um numero"));
let num2 = Number (prompt ( "insira outro numero"));

console.log("O primeiro numero é maior que segundo?", num1 > num2)
console.log("O primeiro numero é igual ao segundo?", num1 === num2)
console.log("O primeiro numero é divisível pelo segundo?", num1 % num2 ===0)
console.log("O segundo numero é divisível pelo primeiro?", num2 % num1===0)
