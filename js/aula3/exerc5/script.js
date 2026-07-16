const lista = document.getElementById("lista")
const inputTexto = document.getElementById("texto")
const inputIndice = document.getElementById("indice")
const btnInserir = document.getElementById("btn-inserir")

btnInserir.addEventListener("click", function () {
    const texto = document.createElement("li")

    texto.textContent = inputTexto.value.trim()

    const indice = parseInt(inputIndice.value, 10)

    if (texto.textContent == "") {
        alert("Por favor, digite um texto!")
        return
    }

    if (!isNaN(indice) && indice >= 0 && indice < lista.children.length) {
        lista.insertBefore(texto, lista.children[indice])
    } else {
        lista.appendChild(texto)
    }
    inputTexto.value = ""
    inputIndice.value = ""
})