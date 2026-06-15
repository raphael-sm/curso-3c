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
            se(temp%2==0){
                vetor[contador] = temp
                contador++
            }
        }
        para(inteiro j = 0; j<contador; j++){
            escreva(vetor[j])
        }
    }
}