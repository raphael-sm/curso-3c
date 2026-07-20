const form = document.getElementById("form")
const input = document.getElementById("name")

form.addEventListener("submit", function(event) {
    if(input.value.trim().length === 0) {
        event.preventDefault()
    }
})