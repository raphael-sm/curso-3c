programa
{
    funcao inicio()
    {
        real idade
        escreva("Digite sua idade:")
        leia(idade)
        se (idade < 0) {
            escreva("Você não tem ", idade, " anos.")
        } senao se (idade<13) {
            escreva("Você é uma criança.")
        } senao se (idade<18) {
            escreva("Você é um adolescente.")
        } senao se (idade<60) {
            escreva("Você é adulto.")
        } senao se (idade<100) {
            escreva("Você é idoso.")
        } senao se (idade<123) {
            escreva("Você é centenário.")
        } senao {
            escreva("Você ainda está vivo?")
        }
    }
}