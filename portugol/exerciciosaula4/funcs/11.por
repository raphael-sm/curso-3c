programa
{   
    funcao inteiro maior_num(inteiro num1, inteiro num2){
        se(num1>num2){
            retorne num1
        } senao {
            retorne num2
        }
    }

    funcao inicio()
    {
        inteiro numero1
        inteiro numero2
        escreva("Digite o primeiro número: ")
        leia(numero1)
        escreva("Digite o segundo número: ")
        leia(numero2)
        cadeia retornado = ""
        retornado = maior_num(numero1, numero2)
        escreva("O maior entre eles é ", retornado)
    }
}