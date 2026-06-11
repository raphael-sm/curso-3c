programa
{
    funcao inicio()
    {
        real num1
        real num2
        escreva("Digite o primeiro número: ")
        leia(num1)
        escreva("Digite o segundo número: ")
        leia(num2)
        se (num1>num2) {
            escreva(num1, " é maior.")
        } senao se (num1<num2) {
            escreva(num2, " é maior.")
        } senao {
            escreva(num1, " e ", num2, " são iguais.")
        }
    }
}