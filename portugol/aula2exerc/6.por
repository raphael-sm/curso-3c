programa
{
    funcao inicio()
    {
        inteiro opcao
        real num1
        real num2
        escreva("\n 1 - Somar \n 2 - Subtrair \n Selecione uma opção:")
        leia(opcao)

        escreva("Digite o primeiro número:")
        leia(num1)

        escreva("Digite o segundo número:")
        leia(num2)

        escolha (opcao) {
            caso 1:
                escreva(num1, " + ", num2, " = ", num1+num2)
                pare
            caso 2:
                escreva(num1, " - ", num2, " = ", num1-num2)
                pare
        }
    }
}