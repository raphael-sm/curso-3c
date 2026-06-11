programa
{
    funcao inicio()
    {
        inteiro entr = 0
        real somatorio
        faca {
            escreva("Digite um número(digite 0 para terminar):")
            leia(entr)
            somatorio = somatorio + entr
        } enquanto(entr != 0)
        escreva("O total foi ", somatorio)
    }
}