programa
{
    funcao inicio()
    {
        real nota = -1
        escreva("Digite a nota do aluno: ")
        leia(nota)

        se ((nota<0) ou (nota>10)) {
            escreva("erro de digitacao")
        } senao se (nota>=7) {
            escreva("Aluno foi aprovado")
        } senao se (nota>=5) {
            escreva("Aluno está de recuperação")
        } senao se (nota < 5 e nota > 0) {
            escreva("Aluno foi reprovado")
        } senao {
            escreva("foi digitado nada ou texto.")
        }
    }
}