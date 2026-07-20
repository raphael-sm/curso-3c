const text = document.getElementById("virus")

window.addEventListener("scroll", function(){
    const clone = document.createElement("p")
    clone.innerHTML = "&#9786;&#9786;&#9786;<br>you are an idiot"
    document.body.append(clone)
})