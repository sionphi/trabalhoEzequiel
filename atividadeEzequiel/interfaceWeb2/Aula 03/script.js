// let localizacaoAtual = "Torre dos Vingadores";
// console.log("Equipe reportando de:", localizacaoAtual);

// localizacaoAtual = "Wakanda"; // O valor 'let' pode mudar.
// console.log("Nova localização:", localizacaoAtual);

// const lider = "Capitão América"; // O valor 'const' é fixo.

// // --- Parte 2
// alert("Iniciando protocolo de recrutamento de Novos Vingadores...");

// // Usando prompt()
// const nomeRecrutra = prompt("Qual seu codinome de heroi?");
// const poderRecruta = prompt("Descreva seu poder principal");

// // Fazendo uma pergunta de Sim/Não com confirm()
// const aceitaTermos = confirm("Você jura proteger a terra e seguir as ordens da SHIELD?");

// Exibindo a ficha completa
// console.log(`
//     --- FICHA DE RECRUTAMENTO ---
//     Codinome: ${nomeRecrutra}
//     Poder: ${poderRecruta}
//     Aceitou os termos: ${aceitaTermos} 
//     -----------------------------------
// `);

// alert("Recruta"+ nomeRecrutra + ", seus dados foram enviados para Nick Fury. Aguarde.");

// Exercicios
let meuVingador = "Homem-Aranha";
const JoiaDoInfinito = 6;
const hulkEsmaga = true;
console.log(`
    --- FICHA DE RECRUTAMENTO ---
    Meu vingador favorito: ${meuVingador}
    Quantidade de joias: ${JoiaDoInfinito}
    Hulk esmaga?: ${hulkEsmaga} 
    -----------------------------------
`);

const nomeAgente = "Matheus"
let nivelAgente = 16
console.log(`Agente ${nomeAgente} tem nivel de acesso ${nivelAgente}`)

const Identidade = "Peter Parker";
console.log(Identidade);
Identidade = "Tony Stark";


// Desafio Final
const nome = prompt("Qual o nome do personagem?");
const origem = prompt("Qual seu planeta de origem");
const vilao = confirm("O personagem é um vilão?");

if (vilao) {
    alert(`ALERTA VERMELHO: " + ${nome} + "de" + ${origem} + "é uma ameaça!`)
} else {
    alert(`Relatorio: ${nome}  de  ${origem}  é um aliado potencial`)
}