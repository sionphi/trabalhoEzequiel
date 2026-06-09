const btnPortal = document.getElementById('btn-portal');
const loader = document.getElementById('loader');
const areaResultado = document.getElementById('resultado-api');

btnPortal.addEventListener('click', async() => {
    areaResultado.innerHTML = '';
    loader.classList.remove('hidden');

    try {
        const idAleatorio = Math.floor(Math.random() * 826) + 1;

        const resposta = await fetch (`https://rickandmortyapi.com/api/character/${idAleatorio}`);

        const dados = await resposta.json();

        loader.classList.add('hidden');

        areaResultado.innerHTML = `
            <div class="char-card">
                <img src="${dados.image}" alt="${dados.name}">
                <div class="char-info">
                    <h3 class="font-bold text-xl text-lime-400">${dados.name}</h3>
                    <p class="text-sm text-slate-300">Status: ${dados.status}</p>
                    <p class="text-sm text-slate-300">Espécie: ${dados.species}</p>
                </div>
            </div>
        `;
    }

    catch (erro) {
        loader.classList.add('hidden');
        areaResultado.innerHTML = '<p class="text-red-500">Erro no portal. Tente novamente </p>';
        console.error(erro);
    }
})