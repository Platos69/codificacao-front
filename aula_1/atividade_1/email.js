function enviarEmail() {
    var email = document.getElementById("emailInput").value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    if (email.trim() === "") {
        // Campo de e-mail vazio
        document.getElementById("errorMessage").style.display = "block"
    } else if (!emailRegex.test(email)) {
        // E-mail em formato inválido
        document.getElementById("errorMessage").style.display = "block"
    } else {
        // E-mail válido - aqui você pode adicionar o código para enviar o e-mail
        alert("E-mail válido! Enviando agora...");
        document.getElementById("errorMessage").style.display = "none"
    }
}