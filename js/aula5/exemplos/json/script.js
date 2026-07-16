const response = await fetch("./data.json");
// const data = await response.json();

const pessoas = [
    {
        "nome": "Reginaldo",
        "idade": 18,
        "habilidades": ["PHP", "Java", "Stack HCJ"],
        "veiculo": "Fiat 147",
        "foto_veiculo": "https://autosorfaos.wordpress.com/wp-content/uploads/2010/10/fiat-147-bege.jpg"
    },
    {
        "nome": "João",
        "idade": 20,
        "habilidades": ["Node.js", "SQL"],
        "veiculo": "Carro do bad piggies",
        "foto_veiculo": "https://i.pinimg.com/474x/da/47/4e/da474e010f1965499dd5f11043ac28be.jpg"
    },
    {
        "nome": "Ricardo",
        "idade": 38,
        "habilidades": ["Assembly", "C/C++/C#", "Bash"],
        "veiculo": "Kombi Articulada",
        "foto_veiculo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcLiF4VPlV8Ijk_MipVpI1s_kRi651mA5P36m9AeukNuSCZ3X4-glZ-JV&s=10"
    }
]

localStorage.setItem("informacoes", JSON.stringify(pessoas))
const raw = localStorage.getItem("informacoes")
const data = JSON.parse(raw)
let i = 0

const nome = document.createElement("p")
nome.textContent = "Nome: " +  data[i]["nome"]
document.body.appendChild(nome)

const idade = document.createElement("p")
idade.textContent = "Idade: " + data[i]["idade"]
document.body.appendChild(idade)

const veiculo = document.createElement("p")
veiculo.textContent = "Veículo: " + data[i]["veiculo"]
document.body.appendChild(veiculo)

const foto = document.createElement("img")
foto.src = data[i]["foto_veiculo"]
foto.style.width = "300px"
document.body.appendChild(foto)