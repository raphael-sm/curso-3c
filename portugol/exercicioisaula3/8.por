programa
{
    funcao inicio()
    {   
        real contador
        para(inteiro i = 1; i<=100; i++){
            se(i%2==0){
                contador=contador+i
            }
        }
        escreva("A soma de todos os números pares entre 1 e 100 é: ", contador)
    }
}