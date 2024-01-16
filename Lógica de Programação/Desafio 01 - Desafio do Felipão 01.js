/////////////////////////////////////////   Objetivo    ///////////////////////////////////////////////
//                                                                                                   /
// Criar uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói,          /
// depois utilize uma estrutura de decisção para apresentar alguma das mensagens abaixo:             /
// Se XP for menor do que 1000 = Ferro                                                               /
// Se XP for menor entre 1001 e 2000 = Bronze                                                        / 
// Se XP for menor entre 2001 e 5000 = Prata                                                         /
// Se XP for menor entre 6001 e 7000 = Ouro                                                          /
// Se XP for menor entre 7001 e 8000 = Platina                                                       /
// Se XP for menor entre 7001 e 8000 = Platina                                                       / 
// Se XP for menor entre 8001 e 9000 = Ascendente                                                    /   
// Se XP for menor entre 9001 e 10000 = Imortal                                                      /  
// Se XP for maior ou igual a 10001 = Radiante                                                       /
//                                                                                                   / 
//////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////   Saída    /////////////////////////////////////////////////
//                                                                                                   /
//                          Ao Final deve se exibir uma mensagem:                                    /
//                                                                                                   / 
//                  "O Herói de nome **{nome}** está no nível: **{nivel}**"                          /
//                                                                                                   / 
//////////////////////////////////////////////////////////////////////////////////////////////////////



let heroi = prompt("Digite o nome do primeiro Herói para ser classificado: ")
let lvHeroi = prompt("Digite o level do seu primeiro Herói: ")

let heroi2 = prompt("Digite o nome do segundo Herói para ser classificado: ")
let lvHeroi2 = prompt("Digite o level do seu segundo Herói: ")

let heroi3 = prompt("Digite o nome do terceiro Herói para ser classificado: ")
let lvHeroi3 = prompt("Digite o nome do seu terceiro Herói: ")

let nHeroi = [heroi,heroi2,heroi3]
let lvlHeroi = [lvHeroi,lvHeroi2,lvHeroi3]

for (let x = 0; x < nHeroi.length; x++){
    
    
    let resultadoHeroi = nHeroi[x]
    let resultadoLevel = lvlHeroi[x]
    let statusHeroi

    if (resultadoLevel < 1000){
        statusHeroi = "Ferro"

    } else if(resultadoLevel >= 1001 && resultadoLevel <= 2000) {
        statusHeroi = "Bronze"

    } else if (resultadoLevel >= 2001 && resultadoLevel <= 5000){
        statusHeroi = "Prata"

    } else if (resultadoLevel >= 5001 && resultadoLevel <= 7000) {
        statusHeroi = "Ouro"

    } else if (resultadoLevel >= 7001 && resultadoLevel <= 8000) {
        statusHeroi = "Platina"

    } else if (resultadoLevel >= 8001 && resultadoLevel <= 9000) {
        statusHeroi = "Ascendente"

    } else if (resultadoLevel >= 9001 && resultadoLevel <= 10000){
        statusHeroi = "Imortal"

    } else if (resultadoLevel >= 10001){
        statusHeroi = "Radiante"
    }



    console.log(`O Herói ${resultadoHeroi} está no Nível: ${statusHeroi} (Level: ${resultadoLevel})`)
    }
