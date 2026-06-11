programa
{
    funcao inicio()
    {
        inteiro opcao
        escreva("1 - Carro \n2 - Bicicleta \n3 - Ônibus \n4 - A pé \nSelecione:")
        leia(opcao)
        se (opcao < 1 ou opcao > 4) {
            escreva("inválida")
            retorne
        }
        escolha (opcao) {
            caso 1:
                escreva("Mantenha o foco e a atenção, você consegue.")
                pare
            caso 2:
                escreva("Tenha força e dedicação, e você vai chegar lá!")
                pare
            caso 3:
                escreva("Sozinho ou não, você irá chegar aonde quer estar. Continue!")
                pare
            caso 4:
                escreva("Quem não desiste no difícil nunca desiste no fácil. Vá lá!")
                pare
        }
        retorne
    }
}