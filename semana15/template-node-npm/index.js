
//a) Responda como comentário no seu código: 
//como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// usando a propriedade: process.argv



// b)

// const nome = process.argv[2]
// //const idade = process.argv[3]
// const inputAge= Number(process.argv[3]) + 7

// //console.log(`Olá, ${nome} ! Você tem ${idade} anos.`) 


// console.log(`${inputAge}`) 


// 
const resultado1 = Number(process.argv[2])
const resultado2 = Number(process.argv[3])
const operacao = process.argv[4]

switch(operacao){
	case "soma":
		console.log(resultado1 + resultado2)
		break;
	case "subt":
		console.log(resultado1 - resultado2)
		break;
        case "mult":
        console.log(resultado1 * resultado2)
		break;
        case "div":
        console.log(resultado1 / resultado2)
		break;
}

console.log(operacao)