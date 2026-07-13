const para = document.getElementById("para")
const input = document.getElementById("inputTexto")

input.addEventListener("input", function(event) {
    para.textContent = event.target.value
})