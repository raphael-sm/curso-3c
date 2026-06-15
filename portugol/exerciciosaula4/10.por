programa
{
    funcao inicio()
    {
        inteiro quantos
        escreva("Digite quantos números você quer digitar: ")
        leia(quantos)
        inteiro vetor[quantos]
        inteiro contador = 0
        inteiro temp = 1
        para(inteiro i = 0; i<quantos; i++){
            escreva("Digite o número: ")
            leia(temp)
            vetor[contador] = temp
            contador++
        }
        inteiro n = contador
        inteiro temporaria = 0
        para(inteiro j = 0; j<n-1; j++){
            para(inteiro k = 0; k < n-1-j; k++){
                se (vetor[k] < vetor[k+1]) {
                    temporaria = vetor[k]
                    vetor[k] = vetor[k+1]
                    vetor[k+1] = temporaria
                }
            }
        }
        para(inteiro l = 0; l<contador; l++){
            escreva(vetor[l])
        }
    }
}