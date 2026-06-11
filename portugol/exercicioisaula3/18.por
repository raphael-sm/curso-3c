programa
{
    funcao inicio()
    {   
        inteiro contador = 0 
        para(inteiro i = 1; i<=50 i++){
            se(i%2==0){
                contador = contador + i
            }
        }
        escreva("A soma de todos os números pares até 50 é ", contador)
    }
}