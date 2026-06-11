programa
{
    funcao inicio()
    {
        real nota_corte
        real nota_al
        escreva("Digite qual a nota de corte: ")
        leia(nota_corte)
        se (nota_corte <= 0) {
            escreva("Nota de corte inválida.")
            retorne
        }
        escreva("Digite a nota do aluno: ")
        leia(nota_al)
        se (nota_al >= nota_corte) {
            escreva("aluno aprovado!")
        } senao {
            escreva("aluno reprovado.")
        }
    }
}