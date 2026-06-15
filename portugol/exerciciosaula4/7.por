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
        inteiro contador2
        para(inteiro j = 0; j<contador; j++){
            se(vetor[j]<0){
                contador2++
            }
        }
        escreva("Existem ", contador2, " números negativos.")
    }
}