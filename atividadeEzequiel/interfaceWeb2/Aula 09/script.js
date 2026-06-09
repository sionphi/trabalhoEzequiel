const titulo = document.getElementById('titulo');

// Alterando o texto do titulo
titulo.innerText = 'Você está na Matrix';
// Alterando o estilo em tempo real
titulo.style.color = '#fff';

// 2. CRIANDO ELEMNTOS DO ZERO
const areaAgentes = document.getElementById('agentes');

const dadosAgentes = [
    { nome: 'Agente Smith', foto: 'https://upload.wikimedia.org/wikipedia/pt/thumb/1/1f/Agent_Smith_%28The_Matrix_series_character%29.jpg/250px-Agent_Smith_%28The_Matrix_series_character%29.jpg' },
    { nome: 'Agente Jones', foto: 'https://i.pinimg.com/474x/78/9d/dc/789ddc773ce8ce58ce6d77f8e2e1cc57.jpg' }
];

// Para cada agente na lista, vamos fabricar o HTML
dadosAgentes.forEach(agente => {
    // CREATE: cria a div vazia na memoria
    const novoCard = document.createElement('div');

    // CLASS: Aplica a classe que estilizamos no CSS
    novoCard.className = 'card';

    // INNER HTML: preenche o miolo do card com tags e dados
    novoCard.innerHTML = `
        <img src="${agente.foto}" alt="${agente.nome}">
        <p>${agente.nome}</p>
    `;

    // APPEND: Acopla o elemento finalizado na tela real!
    areaAgentes.appendChild(novoCard);
})

// Exercicio 01
titulo.innerText = 'Ola, Neo'

// Exercicio 02
const telaInteira = document.querySelector('body')
telaInteira.style.backgroundColor = '#0a0a0a';

// Exercicio 03
const paragrafoNovo = document.createElement('p')
paragrafoNovo.innerText('Eu já estive aqui')