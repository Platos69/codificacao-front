const textos = document.getElementById('textos')
clicou = 0

textos.addEventListener('submit', (event) => {
    event.preventDefault()
    document.getElementById('imagem').classList.remove('hidden')
    clicou++

    if (clicou > 1) {
        document.getElementById('imagem').classList.add('hidden')
        location.reload(alert('Página recarregando'))
    }
})