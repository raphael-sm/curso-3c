programa
{
    funcao inicio()
    {
        cadeia senha
        escreva("Digite uma senha: ")
        leia(senha)
        cadeia entr = ""
        enquanto (entr != senha) {
            escreva("Digite a senha para entrar:")
            leia(entr)
        }
        escreva("\n bem vindo.")
    }
}