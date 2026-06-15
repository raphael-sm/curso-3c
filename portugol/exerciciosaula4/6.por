programa
{
    funcao inicio()
    {
        inteiro quantos
        escreva("Digite quantos números você quer que o vetor tenha: ")
        leia(quantos)
        inteiro vetor[quantos]
        para(inteiro i = 0; i<quantos; i++){
            vetor[i] = i+1
        }
        para(inteiro j = 0; j<quantos;j++){
            escreva(vetor[j])
        }
    }
}