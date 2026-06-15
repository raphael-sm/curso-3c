programa
{   
    funcao inteiro fatorial(inteiro num1){
        se(num1<0){
            escreva("Inválido: Fatorial não é definido para números negativos.")
            retorne 0
        }
        inteiro resultado = 1
        para(inteiro i = 2; i<num1+1;i++ ){
            resultado = resultado * i
            escreva(resultado)
        }
        retorne resultado
    }

    funcao inicio()
    {
        inteiro numero1
        escreva("Digite o número: ")
        leia(numero1)
        inteiro n = 0
        n = fatorial(numero1)
        escreva("O fatorial de ", numero1, " é igual a ", n)
    }
}