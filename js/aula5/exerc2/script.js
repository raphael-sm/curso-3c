const jason = [
    {
        "nome": "Reginaldo",
        "idade": 31,
        "habilidades": ["C/C++/C#", "Java"],
        "ativo": true
    },
    {
        "nome": "Paulo",
        "idade": 27,
        "habilidades": ["JavaScript", "TypeScript", "React.js"],
        "ativo": true
    },
    {
        "nome": "Jorge",
        "idade": 20,
        "habilidades": ["Laravel", "PHP", "PostgreSQL", "Bootstrap", "Tailwind"],
        "ativo": true
    }
]

const btnW = document.getElementById("write")
const btnR = document.getElementById("read")

btnW.addEventListener("click", function(){
    localStorage.setItem("usuarios", JSON.stringify(jason))
})

btnR.addEventListener("click", function(){
    let dados = localStorage.getItem("usuarios")
    if(dados){
        alert("Tem Algo")
    } else {
        alert("Tem Nada")
    }
})