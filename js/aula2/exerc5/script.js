const contador = document.getElementById("num")
const input = document.getElementById("text")

input.addEventListener("input", function(evt){
    contador.textContent = evt.target.value.length
})