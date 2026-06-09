// Arrays (Vetores)
aliancaRebelde = ["Luke Skywalker", "Leia Organa", "Han Solo"];
console.log("Esquadrão inicial:", aliancaRebelde);
console.log(aliancaRebelde[1]);

// Adicionando um novo membro  FINAL com .push()
aliancaRebelde.push("Chewbacca");
console.log("Reforços chegaram:", aliancaRebelde);

// Adicionando um membro no INICIO com .unshift()
aliancaRebelde.unshift("Lando Calrissian")
console.log("Um velho amigo se juntou a causa:", aliancaRebelde[0])

// Removendo o ULTIMO membro com .pop()
aliancaRebelde.pop()
console.log("Chewbacca foi consertar a falcon...", aliancaRebelde)

// Removendo o PRIMEIRO membro com .shift()
aliancaRebelde.shift();
console.log("Lando foi cuidar de Bespin...", aliancaRebelde)

// 2. OBJETOS
const millenniumFalcon = {
    nome: "Millennium Falcon",
    piloto: "Han Solo",
    "ano de fabricação": 60
};

console.log(millenniumFalcon)

// Adicionando uma nova propriedade
millenniumFalcon.copiloto = "Chewbacca"
console.log("Ano:", millenniumFalcon['ano de fabricação'])

// Verificando se uma propriedade existe com 'in'
const temHyperDrive = 'hyperdrive' in millenniumFalcon // false
console.log(`A nave possui um hyperdrive? ${temHyperDrive}`)

// Array de objetos
const droids = [
    { nome: "R2-D2", funcao: "Astromecânico" },
    { nome: "C-3P0", funcao: "Protocolo" }
];
console.log(droids);

// Alterando uma informação específica
droids[0].funcao = "Heroi de Aliança";
console.log("Função do R2-D2 atualizada:", droids[0]);