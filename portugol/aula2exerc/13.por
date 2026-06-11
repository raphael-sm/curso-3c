programa
{
    funcao inicio()
    {
        real valor
        escreva("Digite o valor da sua compra: ")
        leia(valor)
        se (valor>100) {
            valor = valor - (valor*0.1)
        }
        escreva("O Valor total da compra é de R$", valor)
    }
}