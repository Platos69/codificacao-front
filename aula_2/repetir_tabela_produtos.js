const produtosEletro = [
    "Smartphone",
    "Laptop",
    "Tablet",
    "Smart TV",
    "Console de Jogos",
    "Câmera DSLR",
    "Fone de Ouvido Bluetooth",
    "Monitor de Computador",
    "Impressora a Laser",
    "Roteador Wi-Fi",
    "Drone",
    "Relógio Inteligente",
    "Caixa de Som Bluetooth",
    "Refrigerador Inteligente",
    "Aspirador de Pó Robô",
    "Aparelho de Som Estéreo",
    "Câmera de Segurança",
    "Smartwatch",
    "Robô de Cozinha",
    "Cafeteira Programável"
]

function nomeAleatorio() {
    const aleatorio = Math.floor(Math.random() * produtosEletro.length)
    return produtosEletro[aleatorio]
}

for (let i = 1; i <= 5; i++) {
    const produtoSorteado = nomeAleatorio()

    produtoValor = Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000

    document.write(`<tr>
    <td><strong>${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}</strong></td>
    <td><strong>${produtoSorteado}</strong></td>    
    <td><strong>R$${produtoValor}</strong></td>
</tr>`)
}

total = document.querySelector(".total")
    
    document.write("<h2 class='text-center'>Total: R$" + total + "</h2>")


