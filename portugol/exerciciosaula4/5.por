programa
{
    funcao inicio()
    {
        inteiro quantos
        escreva("Digite quantas notas você quer digitar: ")
        leia(quantos)
        real vetor[quantos]
        inteiro contador = 0
        real temp = 0
        para(inteiro i = 0; i<quantos; i++){
            escreva("Digite a nota: ")
            leia(temp)
            vetor[contador] = temp
            contador++
        }
        real soma = 0
        para(inteiro j = 0; j<contador; j++){
            soma = soma + vetor[j]
        }
        real media = soma/contador
        escreva("A média da turma é ", media, "\n")
        escreva("NOTAS ACIMA DA MÉDIA \n")
        para(inteiro k = 0; k<contador; k++){
            se(vetor[k]>media){
                escreva("NOTA ", k, ": ", vetor[k], "\n")
            }
        }
    }
}