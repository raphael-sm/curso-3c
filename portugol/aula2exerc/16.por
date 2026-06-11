programa
{
    funcao inicio()
    {
        real nota
        escreva("Digite a média do aluno: ")
        leia(nota)
        se (nota < 0 ou nota > 10) {
            escreva("Nota inválida.")
        } senao se (nota >= 6 e nota <= 10) {
            escreva("Aluno Aprovado")
        } senao se (nota >= 4 e nota < 6) {
            escreva("Aluno de Recuperação")
        } senao {
            escreva("Aluno Reprovado")
        }
    }
}