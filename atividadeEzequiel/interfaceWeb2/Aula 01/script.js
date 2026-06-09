// Exercício 01
const jutsu = prompt("Qual seu jutsu favorito?");
alert("Executando " + jutsu + " agora!");

// Exercício 02
const nome = prompt("Qual é o seu nome?");
console.log("Seja bem-vindo ao teste Chunnin, " + nome + "!");

// Exercício 03
const prefereRamen = confirm("Você prefere Ramen ou Sushi?");
console.log(prefereRamen);

// Exercício 04
const ninja1 = prompt("Digite o nome do primeiro ninja:");
const ninja2 = prompt("Digite o nome do segundo ninja:");
const ninja3 = prompt("Digite o nome do terceiro ninja:");

console.log("Time 7 formado com: " + ninja1 + ", " + ninja2 + " e " + ninja3);

// Exercício 05
const nomeNinja = prompt("Nome do ninja:");
const mensagem = prompt("Digite o relatório:");

console.log("De: " + nomeNinja + " | Para: Hokage | Mensagem: " + mensagem);

// Exercício 06
const nomeCartao = prompt("Nome do Ninja:");
const vila = prompt("Vila:");
const jutsuPrincipal = prompt("Jutsu Principal:");

alert(
    "--- CARTÃO NINJA ---\n" +
    "Nome: " + nomeCartao + "\n" +
    "Vila: " + vila + "\n" +
    "Jutsu: " + jutsuPrincipal
);