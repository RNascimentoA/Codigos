// # 2️⃣ Calculadora de partidas Rankeadas
//**O Que deve ser utilizado*
//
//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões
//- Funções

//## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"


let jogador = prompt("Digite o Nome do primeiro Herói para ser Rankeado: ")
let vitorias = prompt("Digite as Vitórias do primeiro Herói: ")
let derrotas = prompt("Digite as Derrotas do primeiro Herói: ")

let jogador2 = prompt("Digite o Nome do Segundo Herói para ser Rankeado: ")
let vitorias2 = prompt("Digite as Vitórias do Segundo Herói: ")
let derrotas2 = prompt("Digite as Derrotas do Segundo Herói: ")


let mjogador = [jogador,jogador2]
let mvitorias = [vitorias,vitorias2]
let mderrotas = [derrotas,derrotas2]



for (let x = 0; x < mjogador.length; x++){
    
    
    let resultadojogador = mjogador[x]
    let resultadovitorias = mvitorias[x]
    let resultadoderrotas = mderrotas[x]
   
   let statusjogador
   let saldovitorias = ranqueada()
   
        function ranqueada(a,b){
    
        return resultadovitorias - resultadoderrotas
    
        }

    if (resultadovitorias < 10){
        statusjogador = "Ferro"

    } else if(resultadovitorias >= 11 && resultadovitorias <= 20) {
         statusjogador = "Bronze"

    } else if (resultadovitorias >= 21 && resultadovitorias <= 50){
         statusjogador = "Prata"

    } else if (resultadovitorias >= 51 && resultadovitorias <= 80) {
         statusjogador = "Ouro"

    }  else if (resultadovitorias >= 81 && resultadovitorias <= 90) {
         statusjogador = "Diamante"

    } else if (resultadovitorias >= 91 && resultadovitorias <= 100){
         statusjogador = "Lendário"

    } else if (resultadovitorias >= 101){
         statusjogador = "Imortal"
    }
     
    console.log(`O Herói: ${resultadojogador}. Tem o Saldo de: ${saldovitorias} Vitórias e está no nível ${statusjogador}`)
    }

    




