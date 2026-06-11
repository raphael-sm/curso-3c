programa
{
    funcao inicio()
    {
        real peso
        real altura
        escreva("Digite seu peso:")
        leia(peso)
        escreva("Digite sua altura(em cm):")
        leia(altura)
        real imc = peso/((altura/100)*(altura/100))
        se (imc < 18.5) {
            escreva("Você é abaixo do peso.")
        } senao se (imc < 25) {
            escreva("Você está no peso ideal.")
        } senao se (imc < 30) {
            escreva("Você está acima do peso.")
        } senao se (imc < 35) {
            escreva("Vocé está com obesidade grau I")
        } senao se (imc < 40) {
            escreva("Você está com obesidade grau II")
        } senao {
            escreva("Você está com obesidade grau III")
        }
    }
}