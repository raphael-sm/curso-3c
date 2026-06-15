programa
{   
    funcao logico num_par(inteiro num1){
        se(num1%2==0){
            retorne verdadeiro
        } senao {
            retorne falso
        }
    }

    funcao inicio()
    {
        inteiro numero1
        escreva("Digite o número: ")
        leia(numero1)
        logico resultado
        resultado = num_par(numero1)
        se(resultado == verdadeiro){
            escreva(numero1, "é par.")
        } senao {
            escreva(numero1, "é ímpar.")
        }
    }
}