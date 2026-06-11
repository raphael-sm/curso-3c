programa
{
    funcao inicio()
    {
        real contador
        para(inteiro i = 0; i<=9; i++){
            real temp
            escreva("Digite um número: \n")
            leia(temp)
            se (temp<0){
                contador = contador + 1
            }
        }
        escreva("Existem ", contador, "números negativos")
    }
}