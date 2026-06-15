programa
{
    inclua biblioteca Texto --> tx

    funcao inicio()
    {
        inteiro quantos
        escreva("Digite quantos nomes você quer digitar: ")
        leia(quantos)
        cadeia vetor[quantos]
        inteiro contador = 0
        cadeia temp = ""
        para(inteiro i = 0; i<quantos; i++){
            escreva("Digite o nome: ")
            leia(temp)
            vetor[contador] = temp
            contador++
        }
        cadeia maiornome = vetor[0]
        para(inteiro j = 0; j<contador; j++){
            se(tx.numero_caracteres(vetor[j])>tx.numero_caracteres(maiornome))
            {
                maiornome = vetor[j]
            }
        }
        escreva(maiornome)
    }
}