const div = document.getElementById("relogio")
div.textContent = new Date().toTimeString().slice(0,8)

setInterval(function(){
    div.textContent = new Date().toTimeString().slice(0,8)
}, 1000)