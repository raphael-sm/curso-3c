const alternativas = ["A - Operação Minor Scale(1985)", "B - Explosão do Foguete N1(1969)", "C - Explosão de Halifax(1917)"]
const divquiz = document.getElementById("quiz")
const btn = document.getElementById("destacar")

alternativas.forEach(function(element, index){
    const div = document.createElement("div")
    div.innerHTML = "<input type='radio' name='quiz' id='alternativa"+index+"'><label for='alternativa"+index+"'>"+element+"</label>"
    divquiz.appendChild(div)
});

btn.addEventListener("click", function(){
    const selecionada = document.querySelector('input[name="quiz"]:checked')
    divquiz.insertBefore(selecionada.parentElement, divquiz.firstChild)
})