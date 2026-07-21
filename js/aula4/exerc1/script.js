const check = document.getElementById("chk")
document.body.classList.add("tema_claro")

check.addEventListener("click", function(){
    document.body.classList.toggle("tema_claro")
    document.body.classList.toggle("tema_escuro")
})