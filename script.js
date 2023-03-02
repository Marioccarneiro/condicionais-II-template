// PRATICA GUIADA 1

// utilizando if aninhado
//  const idadeDependente = Number(prompt(`qual eh a idade da pessoa dependente?`))

// //  if(idadeDependente >= 13) {
// //     if(idadeDependente < 18) {
// //         console.log(`cartao de credito para dependente APROVADO`)
// //     } else {
// //         console.log(`MAIOR de IDADE : consulte outras opcoes do labank`)
// //      }

// //  } else {
// //     console.log(`MENOR DE IDADE : consulte outras opcoes do labank`)
// //  }





// // utilizando if operar logico

// if (idadeDependente >= 13 && idadeDependente < 18) {
//     console.log(`cartao de credito para dependente APROVADO`)
// } else {
//     console.log(` consulte outras opcoes do labank`)

// }


// PRATICA GUIADA 2 IF TERNARIO verificar idade exatamente 13 anos

// SINTAXE DO TERNARIO - condicao? expresao1 : expresao2

// idadeDependente === 13 ? console.log(`A idade eh 13 , ja pode ter cartao`) : console.log(`Verifique as opcoes do labank`) 




//PRATICA GUIADA 3 - SWITCH CASE
// const tipoCartao = Number(prompt(`Digite o numero correspondente ao tipo de cartao:`))


// switch(tipoCartao) {
//     case 1:
//         console.log(`Cartao de credito FACIL.`)
//         break
//         case 2: 
//         console.log(`Cartao de credito BLACK.`)
//         break
//         case 3: 
//         console.log(`Cartao de credito PLATINUM.`)
//         break
//         case 4: 
//         console.log(`Cartao de credito MASTER GOLD.`)
//         break
//         default:
//             console.log(`Escolha uma das opcoes acima.`)
//             break
// }


// EXERCICIO DE FIXACAO 1 
 const recebeNumero = Number(prompt(`Digite um numero:`))
// // // A UTILIZANDO IF ANINHADO
//  if(recebeNumero % 2 === 0) {
//     if(recebeNumero % 3 === 0) {
//         console.log(`O numero ${recebeNumero} eh divisivel por 2 e 3`)

//     } else {
//         console.log(`O numero ${recebeNumero} nao eh divisivel por 2 e 3`)

//     }
//  } else {
//     console.log(`O numero ${recebeNumero} nao eh divisivel por 2 e 3`)

//  }

// B UTILIZANDO OPERADOR LOGICO

 if(recebeNumero % 2 === 0 && recebeNumero % 3 === 0) {

    
   console.log(`O numero ${recebeNumero} eh divisivel por 2 e 3`)
// // VERIFICA SE NUMERO EH 30 IF TERNARIO
//  // recebeNumero === 30 ? console.log(`UFA, PASSEI`) : console.log(`NAO FOI DESSA VEZ`)

  } else {
     console.log(`O numero ${recebeNumero} nao eh divisivel por 2 e 3`)
  }


// // USANDO SWITCH CASE TESTANDO NUMERO 6,12,18,24,30

switch(recebeNumero) {
    case 6:
        console.log(`O numero eh 6.`)
        break
        case 12:
        console.log(`O numero eh 12.`)
        break
        case 18:
        console.log(`O numero eh 18.`)
        break
        case 24:
        console.log(`O numero eh 24.`) 
        break
        case 30:
        console.log(`O numero eh 30.`)
        break
        default:
        console.log(`O numero eh maior que 30 e menor que 6.`)   
        break
}