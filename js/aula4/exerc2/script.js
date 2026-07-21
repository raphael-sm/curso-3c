const form = document.getElementById("form")
const input = document.getElementById("inp")

form.addEventListener("submit", function(event){
    event.preventDefault()
    if(input.value.trim() != "") {
        input.classList.remove("erro")
        alert("Enviado!")
    } else {
        input.classList.add("erro")
    }
})