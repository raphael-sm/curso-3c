programa
{
    funcao inicio()
    {
        const usuarioPD = "admin"
        const senhaPD = "ednaldopereira"
        cadeia usuario
        cadeia senha

        escreva("Usuário:")
        leia(usuario)
        escreva("Senha:")
        leia(senha)
        se (usuario == usuarioPD e senha == senhaPD) {
            escreva("Login feito com sucesso!")
        } senao {
            escreva("Acesso negado")
        }
    }
}