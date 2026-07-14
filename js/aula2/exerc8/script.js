const w = document.getElementById("w")
const h = document.getElementById("h")
w.textContent = this.window.innerWidth
h.textContent = this.window.innerHeight

this.window.addEventListener("resize", function(event){
    w.textContent = this.window.innerWidth
    h.textContent = this.window.innerHeight
})