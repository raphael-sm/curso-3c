programa
{
    funcao inicio()
    {
        real preco
        escreva("Digite o preço do produto: ")
        leia(preco)
        real preco_desc = preco - (preco*0.15)
        escreva("O produto com 15% de desconto sai por R$", preco_desc)
    }
}