programa
{
    funcao inicio()
    {
        real dia
        escreva("Digite qual o dia atual da semana(use números de 1-7)")
        leia(dia)
        se (dia == 1 ou dia == 7) {
            escreva("Hoje é fim de semana.")
        } senao se (dia > 1 e dia < 7) {
            escreva("Hoje é dia útil.")
        } senao {
            escreva("Inválida.")
        }
    }
}