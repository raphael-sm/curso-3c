programa
{
    funcao inicio()
    {
        real num

        escreva("Digite um número aleatório: ")
        leia(num)
        se (num>0){
            escreva("O número é positivo.")
        } senao se (num < 0) {
            escreva("O número é negativo.")
        } senao se (num == 0) {
            escreva("O número é zero.")
        } senao {
            escreva("Inválido.")
        }
    }
}