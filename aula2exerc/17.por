programa
{
    funcao inicio()
    {
        real num1
        real num2
        escreva("Digite o primeiro número")
        leia(num1)
        escreva("Digite o segundo número")
        leia(num2)
        se (num1%num2==0) {
            escreva(num1, " é múltiplo de ", num2)
        } senao {
            escreva("Não são múltiplos.")
        }
    }
}