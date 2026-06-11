programa
{
    funcao inicio()
    {
        real num1
        real num2
        real num3
        escreva("Digite o primeiro número: ")
        leia(num1)
        escreva("Digite o segundo número: ")
        leia(num2)
        escreva("Digite o terceiro número: ")
        leia(num3)

        se (num1 == num2 e num2 == num3) {
            escreva("São todos iguais.")
        } senao se (num1 > num2 e num1 > num3) {
            escreva(num1, " é o maior.")
        } senao se (num2 > num1 e num2 > num3) {
            escreva(num2, " é o maior.")
        } senao se (num3 > num1 e num3 > num2) {
            escreva(num3, " é o maior.")
        } senao {
            escreva("Algo deu errado. Tente novamente.")
        }
    }
}