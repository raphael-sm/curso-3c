const form = document.getElementById("adicionar")
const nome = document.getElementById("nome")
const lista = document.getElementById("lista")

form.addEventListener("submit", function(event){
    event.preventDefault();
    const item = document.createElement("li")
    item.textContent = nome.value
    lista.append(item)
    item.addEventListener("dblclick", function(){
        this.remove()
    })
})