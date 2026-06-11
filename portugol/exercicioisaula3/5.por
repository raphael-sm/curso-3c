programa
{
    funcao inicio()
    {
        inteiro num
        escreva("Digite um número: ")
        leia(num)
        real resultado = 1
        se(num%1!=0){
            escreva("erro")
            retorne
        }
        para(inteiro i = 2; i <= num; i++) {
            resultado = resultado * i
        }
        escreva(num,"! = ", resultado)
    }
}