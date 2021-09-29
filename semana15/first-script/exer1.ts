// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. 
//Tente atribuir um número a esta variável. O que acontece?


//const minhaString: string = 28
//ele não aceita



// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico.


// const meuNumero: number  = 28
// console.log(meuNumero)



// Como podemos fazer para que essa variável também aceite strings?
// let meuNumero: number | string = 28,
// nome = "maria"
// console.log (nome)



// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
// `nome`, que é uma string; // `idade`, que é um número; // `corFavorita`, que é uma string.

// const pessoa = {
// nome: 'maria',
// idade: 28,
// corFavorita: "azul"
// }

// console.log(pessoa)


// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
// Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.



// type pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita : string
// }


// const mariana: pessoa = {
//     nome: "mariana",
//      idade: 5,
//     corFavorita: "amarelo"

// }

// const ricardo: pessoa = {

//     nome: 'ricardo',
//     idade: 40,
//     corFavorita: "verde"

// }

// const eloa: pessoa = {

//     nome: 'eloa',
//     idade: 6,
//     corFavorita: "rosa"

// }

// console.log(mariana, ricardo, eloa)


// d) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris.
//  Utilize um enum para isso.
 


// enum corDoArco {
// ROSA = "rosa",
// VERDE = "verde",
// AMARELO = "amarelo"

//  }

//  type pessoa = {
//         nome: string,
//         idade: number,
//         corFavorita : string
//     }
    
    
//     const mariana: pessoa = {
//         nome: "mariana",
//          idade: 5,
//         corFavorita: "amarelo"
    
//     }
    
//     const ricardo: pessoa = {
    
//         nome: 'ricardo',
//         idade: 40,
//         corFavorita: "verde"
    
//     }
    
//     const eloa: pessoa = {
    
//         nome: 'eloa',
//         idade: 6,
//         corFavorita: "rosa"
    
//     }
    
//     console.log(mariana, ricardo, eloa)