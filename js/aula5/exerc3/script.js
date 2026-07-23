const raw = await fetch("./data.json")
const data = await raw.json()

const string = JSON.stringify(data)
console.log(string)

const recovered = JSON.parse(string)
console.log(recovered)
console.log(recovered["nome"])
console.log(recovered["veiculo"])