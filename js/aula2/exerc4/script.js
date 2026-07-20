const ico = document.getElementById("icone")
const dica = document.getElementById("dica")

ico.addEventListener("mouseover", function(){
    dica.style.display = "block"
})

ico.addEventListener("mouseout", function(){
    dica.style.display = "none"
})