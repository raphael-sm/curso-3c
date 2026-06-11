programa
{
    funcao inicio()
    {
        real contador
        para(inteiro i = 0; i<=9; i++){
            real temp
            escreva("Digite um número: \n")
            leia(temp)
            contador = contador + temp
        }
        escreva("A média entre os números é: ", contador/10)
    }
}