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
        inteiro maior = 0
        inteiro menor = vetor[0]
        para(inteiro j = 0; j<contador; j++){
            se(vetor[j]>maior){
                maior = vetor[j]
            }
            se(vetor[j]<menor){
                menor = vetor[j]
            }
        }
        escreva(maior, menor)
    }
}