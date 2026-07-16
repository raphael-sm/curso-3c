// const form = document.getElementById("form")
// const email = document.getElementById("email")
// const msg = document.getElementById("msg")

// email.addEventListener("input", function(){
//     if(email.checkValidity()){
//         msg.textContent = "email válido"
//         msg.style.color = "green"
//     } else {
//         msg.textContent = "email invalido"
//         msg.style.color = "red"
//     }
// })

// const video = document.getElementById("video")
// const botao = document.getElementById("btn")

// botao.addEventListener("click", function(){
//     if(video.paused) {
//         video.play()
//     } else {
//         video.pause()
//     }
// })

const msg = document.querySelector("#msg")
const btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    const agora = new Date().toLocaleString()

    localStorage.setItem("ultimo_acesso", agora)

    msg.textContent = agora
})

const u_a = localStorage.getItem("ultimo_acesso")
if (u_a) {
    msg.textContent = u_a
} else {
    msg.textContent = "Nenhum Acesso Registrado"
}