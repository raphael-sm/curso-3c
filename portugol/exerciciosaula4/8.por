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
        inteiro soma = 0
        para(inteiro j = 0; j<contador; j++){
            se(j%2==0){
                soma = soma + vetor[j]
            }
        }
        escreva(soma)
    }
}