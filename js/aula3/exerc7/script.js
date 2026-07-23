const input = document.getElementById("texto")
const lista = document.getElementById("lista")
const btn = document.getElementById("add")

function remover(element){
    element.parentElement.remove()
}

function mover(element, index){
    const itemAtual = element.parentElement;
    const itemAnterior = itemAtual.previousElementSibling;

    if (itemAnterior) {
        lista.insertBefore(itemAtual, itemAnterior);
    }
}

btn.addEventListener("click", function(){
    const li = document.createElement("li")
    li.innerHTML = input.value + "&nbsp;<button onclick='remover(this)'>Remover</button>&nbsp;<button onclick='mover(this, " + lista.childElementCount + ")'>&uarr;</button>"
    lista.appendChild(li)
})