const lista = document.getElementById("lista")

for(const item of lista.children) {
    item.addEventListener("click", function(){
        item.classList.add("urgente")
    })
}