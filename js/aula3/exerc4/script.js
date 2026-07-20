let display = document.getElementById("contador");
const botao = document.getElementById("btn-mais");
const reset = document.getElementById("btn-reset");
let contador = 0;

botao.addEventListener("click", function(){
    contador += 1
    display.textContent = contador
})

reset.addEventListener("click", function(){
    const p = document.createElement("p")
    p.textContent = "0"
    p.setAttribute('id', 'contador')
    document.body.replaceChild(p, display)
    contador = 0
    display = p
})