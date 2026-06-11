programa
{
    funcao inicio()
    {
        real base
        inteiro expoente
        escreva("Digite a base: ")
        leia(base)
        escreva("Digite o expoente(números inteiros somente): ")
        leia(expoente)
        const cadeia baseC = base
        para(inteiro i = 1; i<expoente; i++){
            base = base * baseC
        }
        escreva(base)
    }
}