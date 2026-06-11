programa
{
    funcao inicio()
    {
        inteiro opcao
        real num1
        real num2
        escreva("\n 1 - Quadrado \n 2 - Triângulo \n 3 - Círculo \n Escolha:")
        leia(opcao)
        se (opcao == 1) {
            escreva("Digite o lado do quadrado:")
            leia(num1)
            escreva("A área do quadrado é: ", num1*num1)
        } senao se (opcao == 2) {
            escreva("Digite o tamanho da base do triângulo:")
            leia(num1)
            escreva("Digite a altura do triângulo:")
            leia(num2)
            escreva("A área do Triângulo é ", (num1*num2)/2)
        } senao se (opcao == 3) {
            escreva("Digite o raio do círculo:")
            leia(num1)
            escreva("A área do círculo é ", (num1*num1)*3.1415)
        } senao {
            escreva("opcao invalida")
        }
    }
}