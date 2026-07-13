const pA = document.getElementById("parA")
const pB = document.getElementById("parB")
const button = document.getElementById("btn")

button.addEventListener("click", function() {
    pA.textContent = "paragrafo com <strong>textContent</strong>"
    pB.innerHTML = "paragrafo com <strong>innerHTML</strong>"
})