/*
let raio = prompt("Digite o valor do raio")
let area = Math.PI * Math.pow(raio, 2)
alert("A área do cículo é " + area)

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let ano_nasc = prompt("Digite seu ano de nascimento: ")
let idade  = (new Date().getFullYear()) - ano_nasc
alert("Você tem " + idade + " anos")

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let idade1 = prompt("Digite a idade da primeira pessoa: ")
let idade2 = prompt("Digite a idade da segunda pessoa: ")
if (idade1 == idade2) {
    alert("Ambas tem a mesma idade")
} else if (Math.max(idade1, idade2) == idade1) {
    alert("A pessoa 1 é mais velha")
} else if (Math.max(idade1, idade2) == idade2) {
    alert("A pessoa 2 é mais velha")
} else {
    alert("erro desconhecido")
}

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let cat1 = prompt("Valor do cateto 1:")
let cat2 = prompt("Valor do cateto 2:")
let hipo = Math.hypot(cat1, cat2)
alert("A hipotenusa é igual a " + hipo)

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let preco1 = prompt("Digite o preço do produto: ")
let desconto = (preco1 - (preco1*0.15)).toFixed(2)
alert("O preço com desconto é " + desconto)

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let celcius = prompt("digite a temperatura em celsius")
let f = (celcius*(9/5)+32)
alert("A temperatura em fahrenheit é " + f)

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

alert("O número aleatório é " + Math.floor(Math.random()*100))

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let num_1 = prompt("Digite um número: ")
let TmC = (num_1*3)-5
alert("Esse número triplicado menos cinco é igual a " + TmC)

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let num1 = prompt("Digite o primeiro número: ")
let num2 = prompt("Digite o segundo número: ")
let num3 = prompt("Digite o terceiro número: ")

if (num1==num2==num3) {

} else if (Math.max(num1,num2,num3) == num1) {
    alert("O número " + num1 + " é o maior");
} else if (Math.max(num1,num2,num3) == num2) {
    alert("O número " + num2 + " é o maior");
} else if (Math.max(num1,num2,num3) == num3) {
    alert("O número " + num3 + " é o maior");
}

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let ano = prompt("Digite um ano aleatório")

if (ano%400==0) {
    alert("É bissexto")
} else if (ano%100!=0 && ano%4==0) {
    alert("É bissexto")
} else {
    alert("Não é bissexto.")
}

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let nota = prompt("Digite sua nota(0-100): ")
switch (true) {
    case (nota > 90): 
        alert("Você conseguiu nota A")
        break
    case (nota > 80):
        alert("Você conseguiu nota B")
        break
    case (nota > 70):
        alert("Você conseguiu nota C")
        break
    case (nota > 60):
        alert("Você conseguiu nota D")
        break
    default:
        alert("Você conseguiu nota F")
        break
}

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let peso = prompt("Digite o seu peso:")
let altura = prompt("Digite sua altura(em m):")
let IMC = (peso/(Math.pow(altura, 2))).toFixed(2)
if (IMC <= 18.5) {
    alert("Você tem o IMC de " + IMC + ", abaixo do peso.")
} else if (IMC <= 24.9) {
    alert("Você tem o IMC de " + IMC + ", peso normal.")
} else if (IMC <= 29.9) {
    alert("Você tem o IMC de " + IMC + ", acima do peso.")
} else if (IMC <= 34.9) {
    alert("Você tem o IMC de " + IMC + ", obeso.")
} else {
    alert("Você tem o IMC de " + IMC + ", obesidade extrema")
}

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let dia = parseInt(prompt("Digite o número do dia da semana: "))
if (dia < 1 || dia > 7) {
    alert("Dia inválido!")
} else {
    switch (dia) {
        case 1:
            alert("É domingo.")
            break
        case 2:
            alert("É segunda.")
            break
        case 3:
            alert("É terça.")
            break
        case 4:
            alert("É quarta.")
            break
        case 5:
            alert("É quinta.")
            break
        case 6:
            alert("É sexta.")
            break
        case 7:
            alert("É sábado.")
            break
        default:
            alert("???")
    }
    if(dia == 1 || dia == 7) {
        alert("É fim de semana.")
    } else {
        alert("É dia útil.")
    }
}

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let selecao = parseInt(prompt("Selecione uma forma geométrica(1–Quadrado, 2–Triângulo, 3–Círculo): "))
switch (selecao) {
    case 1:
        let lado = prompt("Digite o lado: ")
        alert("A área do quadrado é " + Math.pow(lado, 2))
        break
    case 2:
        let base = prompt("Digite a base: ")
        let altura = prompt("Digite a altura: ")
        alert("A área do triângulo é " + (base*altura)/2)
        break
    case 3:
        let raio = prompt("Digite o raio: ")
        alert("A área do círculo é " + (Math.pow(raio,2)*Math.PI).toFixed(2))
}

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let n1 = prompt("Digite o primeiro número: ")
let n2 = prompt("Digite o segundo número: ")
let multiplos = n2%n1==0 ? true : false

if(multiplos){
    alert(n2 + " é múltiplo de " + n1)
} else {
    alert("Não são múltiplos.")
}

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

const usuario = "admin"
const senha = "123456"
if (prompt("Digite o nome de usuário: ").toLowerCase() === usuario) {
    if (prompt("Digite sua senha: ").toLowerCase() === senha) {
        alert("Bem Vindo!")
    } else {
        alert("Senha incorreta")
    }
} else {
    alert("Usuário incorreto.")
}

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let num = parseInt(prompt("Digite o número: "))
let res = 1

for(let i = num; i > 1; i--) {
    res *= i
}

alert("O resultado de " + num + "! é " + res)

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let soma = 0
for(i=0;i<=100;i++){
    if(i%2==0){
        soma += i
    }
}

alert("a soma de todos os números pares de 1 a 100 é " + soma)

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

for(let i = 1;i<=20;i++){
    console.log(i*3)
}

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let entrada = "";

while(entrada.toLowerCase()!="sair"){
    entrada = prompt("1 - mensagem epica;\n2 - nao faz nada\n3 - tutorial de como fazer um sanduiche\n4 - lançar missil termonuclear")
    if (entrada == "1") {
        alert("mensagem epica")
    } else if (entrada == "2") {
        alert("menti kkkk")
    } else if (entrada == "3") {
        alert("esqueci")
    } else if (entrada == "4") {
        alert("boa tentativa, mas você não pode fazer isso")
    }
}

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let n = parseInt(prompt("Digite quantos números irá inserir: "))
let nPos = 0
let nNeg = 0
let nZero = 0
for(i = 0;i<n;i++){
    let entrada = parseInt(prompt("Digite um número: "))
    if (entrada>0){
        nPos += 1
    } else if (entrada<0) {
        nNeg += 1
    } else {
        nZero += 0
    }
}

alert("Nº Positivos: " + nPos + "\nNº Negativos: " + nNeg + "\nNº Zeros: " + nZero)

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

for(let i = 1;i<=10;i++){
    for(let j = 1;j<=10;j++){
        console.log(i + " X " + j + " = " + (i*j))
    }
}

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

const senha_corr = "xbox360"
let entrada = ""

do {
    entrada = prompt("Digite a senha: ")
} while (entrada.toLowerCase() != senha_corr)

alert("Bem Vindo!")

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let entrada = 0
let soma = 0

do {
    entrada = parseInt(prompt("Digite um número: "))
    soma += entrada
} while (entrada != 0)

alert("A soma dos números é " + soma)

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let base = parseInt(prompt("Digite a base: "))
let expoente = parseInt(prompt("Digite o expoente: "))
let res = 1

for(i=1;i<=expoente;i++){
    res = res * base
}

alert("O resultado é " + res)

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let n = parseInt(prompt("Digite quantos dígitos você quer: "))
let n_1 = 0
let n_2 = 1
let res = 0
console.log(0)
console.log(1)
for(i=0;i<n;i++){
    res = n_1 + n_2
    n_1 = n_2
    n_2 = res
    console.log(res)
}

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let arr = []
let n = parseInt(prompt("Digite quantos números o array terá: "))

for(i=0;i<n;i++){
    arr.push(parseInt(prompt("Digite o número: ")))
}

alert(arr.reverse())

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let arr = []
let n = parseInt(prompt("Digite quantos números o array terá: "))

for(i=0;i<n;i++){
    arr.push(parseInt(prompt("Digite o número: ")))
}

alert("O maior número do array é " + Math.max(...arr) + ", e o menor é " + Math.min(...arr))
*/
// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA

let arr = []
let n = parseInt(prompt("Digite quantos números o array terá: "))

for(i=0;i<n;i++){
    arr.push(parseInt(prompt("Digite o número: ")))
}

let total = arr.reduce((accumulator, currentVal) => {
    return accumulator + currentVal
}, 0)

average = total / arr.length

arr.forEach(element => {
    if(element.value > average) {
        console.log(value)
    }
});

// DIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISADIVISA