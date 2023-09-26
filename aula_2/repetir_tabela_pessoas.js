const nomes = [
    "Maria",
    "João",
    "Ana",
    "Pedro",
    "Mariana",
    "Luiz",
    "Carla",
    "Rafael",
    "Lúcia",
    "Gustavo",
    "Fernanda",
    "Lucas",
    "Isabela",
    "Ricardo",
    "Camila",
    "Antônio",
    "Sofia",
    "Eduardo",
    "Amanda",
    "Roberto",
    "Larissa",
    "Carlos",
    "Isadora",
    "José",
    "Valentina",
    "Fábio",
    "Letícia",
    "André",
    "Juliana",
    "Fernando",
    "Natália",
    "Paulo",
    "Lara",
    "Raul",
    "Beatriz",
    "Vitor",
    "Gabriela",
    "Marcos",
    "Bianca",
    "Felipe",
    "Laura",
    "Matheus",
    "Helena",
    "Marcelo",
    "Larissa",
    "Roberta",
    "Caio",
    "Clara"
]

function nomeAleatorio() {
    const aleatorio = Math.floor(Math.random() * nomes.length)
    return nomes[aleatorio]
}

for (let i = 1; i <= 5; i++) {
    const nomeSorteado = nomeAleatorio()

    document.write(`<tr>
    <td><strong>${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}</strong></td>
    <td><strong>${nomeSorteado}</strong></td>
    <td><strong>${Math.floor(Math.random() * (130 - 18 + 1)) + 18}</strong></td>
    </tr>`)

}