const hero = document.querySelector('#hero')
const st = document.querySelector('#subtitulo')
const p = document.createElement("p")
p.textContent = "bemvindo"
hero.insertBefore(p, st)