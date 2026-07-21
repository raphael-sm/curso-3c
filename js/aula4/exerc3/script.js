const btn = document.getElementById("btn")
const div = document.getElementById("div1")

btn.addEventListener("click", function(){
    if(div.classList.contains("none")){
        div.classList.remove("none")
    } else {
        div.classList.add("none")
    }
})