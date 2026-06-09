// Exercício 01
let meuVingador = "Homem de Ferro";

// Exercício 02
const joiasDoInfinito = 6;

// Exercício 03
const hulkEsmaga = true;

// Exercício 04
const nomeAgente = "Matheus";
const nivelAgente = "7";

console.log(`Agente ${nomeAgente} tem nível de acesso ${nivelAgente}`);

// Exercício 05
const identidadeHomemAranha = "Peter Parker";

// identidadeHomemAranha = "Miles Morales";
// Resultado: erro no console, pois uma constante não pode ser alterada.

// Exercício 06
const nomePersonagem = prompt("Digite o nome do personagem:");
const planetaOrigem = prompt("Digite o planeta de origem:");
const eVilao = confirm("O personagem é um vilão?");

if (eVilao) {
    alert(`ALERTA VERMELHO: ${nomePersonagem} de ${planetaOrigem} é uma ameaça!`);
} else {
    alert(`Relatório: ${nomePersonagem} de ${planetaOrigem} é um aliado potencial.`);
}