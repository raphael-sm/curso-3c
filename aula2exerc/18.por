programa
{
    funcao inicio()
    {
        inteiro opcao
        real temp
        escreva("1 - ºC -> ºF \n2 - ºF -> ºC \nSelecione: ")
        leia(opcao)
        se (opcao == 1 ou opcao == 2) {
            escreva("Digite a temperatura a converter: ")
            leia(temp)
            se (opcao == 1) {
                real temp2 = (temp * 1.8)+32
                escreva(temp, "ºC são iguais a ", temp2, "ºF")
            } senao se (opcao == 2) {
                real temp3 = (temp - 32) / 1.8
                escreva(temp, "ºF são iguais a ", temp3, "ºC")
            }
        }
    }
}