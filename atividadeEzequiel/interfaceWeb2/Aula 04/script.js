// const recompensaLuffy = 3000000000;
// const recompensaZoro = 1111000000;

// const recompensaTotal = recompensaLuffy + recompensaZoro;
// console.log("Recompensa combinada do capitão e imediato:", recompensaTotal);

// const recompensaBuggy = 3189000000;
// const luffyMaisForte = recompensaLuffy > recompensaBuggy;

// console.log(`A recompensa do Luffy é maior que a do Buggy? ${luffyMaisForte}`);

// const nomeDoTesouro = "One Piece";
// console.log("Este é o tesouro verdadeiro?", nomeDoTesouro === "One Piece");

// const temComida = true;
// const temNavegador = true;
// const marinhaPorPerto = false;

// const podeNavegar = temComida && temNavegador;
// console.log(`Podemos zarpar para a proxima ilha? ${podeNavegar}`);

// const podeFestejar = temComida || recompensaLuffy > 0;
// console.log(`Bora ter um banquete? ${podeFestejar}`);

// const estamosSeguros =  !marinhaPorPerto;
// console.log(`A costa está limpa? ${estamosSeguros}`);

// Exercicio
const forcaInimigo = prompt("Qual a força do navio? (1-10)")
const quantidade = prompt("Tem quantos tripulantes inimigos?")
const marCalmo = confirm("O mar está calmo")
const nossaForca = 8;
const podemosVencer = nossaForca > forcaInimigo && quantidade < 50 || marCalmo;

if (podemosVencer == true) {
    console.log(`Podemos vencer? ${podemosVencer}`)
} else {
    console.log(`Podemos vencer? ${podemosVencer}`)
}