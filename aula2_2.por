programa
{
    funcao inicio()
    {
        inteiro opcao

        escreva("\n 1 - Pizza \n 2 - Hambúrguer \n 3 - Pastel")
        leia(opcao)

        escolha(opcao) {
            caso 1:
                escreva("O cliente escolheu Pizza")
            pare
            caso 2:
                escreva("O cliente escolheu Hambúrguer")
            pare
            caso 3:
                escreva("O cliente escolheu pastel.")
            pare
            caso contrario:
                escreva("Opção inválida.")
        }
    }
}