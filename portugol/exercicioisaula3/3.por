programa
{
    funcao inicio()
    {
        real numero
        escreva("Digite o número desejado para descobrir sua tabuada: ")
        leia(numero)
        para(inteiro i = 1; i<=10;i++){
            escreva(numero, " x ", i, " = ", i*numero, "\n")
        }
    }
}