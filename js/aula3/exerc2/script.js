const btnT = document.querySelector("#btn-topo")
const btnF = document.querySelector("#btn-fim")
const lista = document.querySelector("#lista")

btnF.addEventListener("click", function(){
    const p = document.createElement("li")
    p.innerHTML = "item novo &nbsp; <button onclick='this.parentElement.remove()'>Remover</button>"
    lista.appendChild(p)
})

btnT.addEventListener("click", function(){
    const p = document.createElement("li")
    p.innerHTML = "item novo no topo &nbsp; <button onclick='this.parentElement.remove()'>Remover</button>"
    lista.insertBefore(p, lista.firstChild)
})