const mensagem = document.getElementById('mensagem-joyce');

// Manipulando a propriedade de texto do elemnto encontrado
mensagem.innerText = 'ESTOU AQUI';

// Manipulando o CSS direto pelo javaScript
mensagem.style.color = '#eab308'

// querySelector: acha apenas o PRIMEIRO elemnto
const laboratorio = document.querySelector('#laboratorio-hawkins')
laboratorio.style.backgroundColor = 'rgba(20, 0, 0, 0.5)';

// querySelectorAll: Acha TODOS os elementos e retorna uma lista
const membrosClube = document.querySelectorAll('.membro')

membrosClube.forEach((membro) => {
    membro.innerText += ' (Presente)';
    membro.style.color = '#818cf8'
    console.log(membrosClube)
});

// Exercicio 01
const titulo = document.getElementById('titulo')
titulo.innerText = 'Portal Aberto'

// Exercicio 02
const quantidadeMembro = document.getElementsByClassName('membro')
console.log(quantidadeMembro.length)
// Exercicio 03
const monstroEscolha = document.querySelector('.monstro')
alert (monstroEscolha.textContent)

console.log(laboratorio)
console.log(monstroEscolha)

// Exercicio 04
const integranteMembro = document.querySelectorAll ('.membro')
integranteMembro.forEach((integrante) => {
    console.log(integranteMembro)
})