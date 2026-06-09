const salaPrecisa = document.getElementById('sala-precisa');
const btnLumos = document.getElementById('btn-lumos');

const pomoDeOuro = document.getElementById('pomo-de-ouro');

const diarioInourt = document.getElementById('diario-input');
const diarioResposta = document.getElementById('diario-resposta');

btnLumos.addEventListener('click', () => {
    salaPrecisa.classList.toggle('lumos-active');

    if (salaPrecisa.classList.contains('lumos-active')) {
        btnLumos.innerHTML = 'NOX!';
    }
    else {
        btnLumos.innerText = 'LUMOS!'
    }
});

pomoDeOuro.addEventListener('mouseenter', () => {

    const novaPosicaoX = Math.random() * 80;
    const novaPosicaoY = Math.random() * 80;

    pomoDeOuro.style.left = `${novaPosicaoX}%`;
    pomoDeOuro.style.top = `${novaPosicaoY}%`;
});

diarioInourt.addEventListener('input', (event) => {
    const textodigitado = event.target.value;

    if (textodigitado == "") {
        diarioResposta.innerText = '...';
    } else {
        diarioResposta.innerText = `O diario absorveu: "${textodigitado}"`;
    }
});

const btn_pena = document.getElementById('btn-pena')
const paragrafo_alteravel = document.getElementById('paragrafo_alteravel')

btn_pena.addEventListener('click', () => {
    btn_pena.classList.toggle('cliqueNoBotao')
    if (btn_pena.classList.contains('cliqueNoBotao')) {
        paragrafo_alteravel.innerText = 'A pena está flutuando'
    } else {
        paragrafo_alteravel.innerText = ''
    }

});

const espelho = document.getElementById('espelho')

espelho.addEventListener('mouseenter', () => {
    alert("Você ve o seu maior desejo!")
});

const imagem = document.getElementById('personagem')

imagem.addEventListener('mouseenter', () => {
    imagem.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE2c5s4FN7XV3KU3HL4xtD-IUUHGLVdZ9QekKIZFnN5yYBaXdg9gYcRsrgqcC1BTbvM5WA4hLd5Orc0vYy2mWDVwTUKKgULQi-LHLIUEzK&s=10'
});

imagem.addEventListener('mouseleave', () => {
    imagem.src = 'https://contentful.harrypotter.com/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?q=75&fm=jpg&w=914'
})