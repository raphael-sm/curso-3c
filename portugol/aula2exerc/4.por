programa
{
    funcao inicio()
    {
        real nota
        escreva("Digite a nota do aluno")
        leia(nota)
        se (nota > 100 ou nota < 0) {
            escreva("Nota Inválida")
        } senao se (nota >= 90) {
            escreva("Você Tirou A")
        } senao se (nota >= 80) {
            escreva("Você Tirou B")
        } senao se (nota >= 70) {
            escreva("Você Tirou C")
        } senao se (nota >= 60) {
            escreva("Você Tirou D")
        } senao {
            escreva("Você Tirou F")
        }
    }
}