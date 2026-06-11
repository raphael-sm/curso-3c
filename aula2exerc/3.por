programa
{
    funcao inicio()
    {
        real nota
        escreva("Digite a média do aluno: ")
        leia(nota)
        se (nota >= 6 e nota <= 10) {
            escreva("O aluno foi aprovado.")
        } senao se (nota < 0 ou nota > 10) {
            escreva("Nota inválida.")
        } senao {
            escreva("O aluno foi reprovado.")
        }
    }
}