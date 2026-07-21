const arquivo = await fetch('./dados.json')
const dados = await arquivo.json()

console.log(dados)