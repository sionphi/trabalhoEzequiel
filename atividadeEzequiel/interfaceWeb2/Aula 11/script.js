const formulario = document.getElementById('form-recruta');
const inputNome = document.getElementById('input-nome');
const inputCodigo = document.getElementById('input-codigo');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nomeDigitado = inputNome.value.trim();
    const codigoDigitado = inputCodigo.value.trim()

    let temErro = false;

    // Validação do NOME
    if (nomeDigitado == "") {
        document.getElementById('erro-nome').classList.remove('hidden');
        inputNome.classList.add('input-error')
        temErro = true;
    } else {
        document.getElementById('erro-nome').classList.add('hidden')
        inputNome.classList.remove('input-error')
    }

    // Validação do codigo
    if (codigoDigitado.length < 6) {
        document.getElementById('erro-codigo').classList.remove('hidden')
        inputCodigo.classList.add('input-error')
        temErro = true
    } else {
        document.getElementById('erro-codigo').classList.add('hidden')
        inputCodigo.classList.remove('input-error')
    }

    // DECISÃO FINAL
    if (temErro === false) {
        document.getElementById('msg-sucesso').classList.remove('hidden')
        inputNome.value = ""
        inputCodigo.value = ""
    } else {
        document.getElementById('msg-sucesso').classList.add('hidden')       
    }
})

