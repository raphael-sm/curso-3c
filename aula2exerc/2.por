programa
{
    funcao inicio()
    {
        inteiro idade

        escreva("Digite sua idade: ")
        leia(idade)

        se (idade <= 0) {
            escreva("Idade inválida")
            retorne
        }

        se (idade >= 18) {
            escreva("Você é maior de idade.")
        } senao {
            escreva("Você é menor de idade.")
        }
    } 
}