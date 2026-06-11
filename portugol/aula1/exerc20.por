programa
{
    funcao inicio()
    {
        inteiro idade1
        inteiro idade2
        escreva("Digite a idade da pessoa 1: ")
        leia(idade1)
        escreva("Digite a idade da pessoa 2: ")
        leia(idade2)
        se (idade1 < idade2) {
            escreva("A pessoa 1 é mais nova que a pessoa 2.")
        } senao se (idade1 > idade2) {
            escreva("A pessoa 2 é mais nova que a pessoa 1.")
        } senao {
            escreva("Ambas tem a mesma idade.")
        }
    }
}