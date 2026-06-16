programa
{   
    funcao cadeia situacao(real num){
        se(num>10 ou num<0){
            retorne "com uma nota inválida. Tente novamente."
        } senao se (num>=7){
            retorne "Aprovado"
        } senao se (num>=5){
            retorne "de Recuperação"
        } senao{
            retorne "Reprovado"
        }
    }

    funcao inicio()
    {
        real numero1
        escreva("Digite a nota do aluno: ")
        leia(numero1)
        cadeia retornado = ""
        retornado = situacao(numero1)
        escreva("O Aluno está", retornado)
    }
}