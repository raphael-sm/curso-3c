const btn = document.getElementById("trocar")
const destaque = document.getElementById("destaque")

function trocar(){
    const newDiv = document.createElement("div")
    newDiv.innerHTML = "<p>Conteúdo destaque</p>"
    newDiv.classList.add("ds")
    document.body.replaceChild(newDiv, destaque)
    btn.removeEventListener("click", trocar)
}

btn.addEventListener("click", trocar)