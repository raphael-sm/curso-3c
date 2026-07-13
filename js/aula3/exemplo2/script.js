// const lista = document.getElementById("lista")
// const btn_primeiro = document.getElementById("btn1")
// const btn_segundo = document.getElementById("btn2")

// btn_primeiro.addEventListener("click", function() {
//     const li = document.createElement("li")
//     li.textContent = "você não viu nada(appendChild)"
//     lista.appendChild(li)
// })

// btn_segundo.addEventListener("click", function() {
//     const li = document.createElement("li")
//     li.textContent = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa(append)"
//     lista.append(li)
// })

// const lista = document.getElementById("lista")
// const item1 = document.getElementById("item1")
// const item2 = document.getElementById("item2")
// const btn = document.getElementById("btn")
// let contador = 0

// btn.addEventListener("click", function(){
//     const li = document.createElement("li")
//     li.textContent = "Novo LI"
//     if (item1 && lista.contains(item1)) {
//         lista.insertBefore(li, item1)
//     } else {
//         alert("ITEM 1 NAO EXISTE")
//     }
// })

// const titulo = document.querySelector('#titulo')
// const cards = document.querySelectorAll(".div")
// const input = document.querySelector("input[type='email']")

// titulo.addEventListener("click", function() {
//     alert("voce clicou no titulo")
// })

// cards.forEach(function(card) {
//     card.addEventListener("click", function() {
//         card.remove()
//     })
// });

// input.addEventListener("click", function() {
//     input.remove()
// })

// function nome(x) {

// }

// nome(y)

// const card = document.getElementById("card")
// let pvelho = document.getElementById("pvelho")

// const pnovo = document.createElement("p")
// pnovo.textContent = "goo goo gaa gaa"
// card.replaceChild(pnovo, pvelho)

const input = document.getElementById("input")
const btn = document.getElementById("btn")
const lista = document.getElementById("lista")

btn.addEventListener("click", function() {
    const li = document.createElement("li")
    li.textContent = input.value + " "
    lista.append(li)
    const btnRem = document.createElement("button")
    btnRem.textContent = "Remover"
    btnRem.addEventListener("click", function(){
        li.remove()
    })
    li.append(btnRem)
})