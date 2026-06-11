programa {
  funcao inicio() {
    inteiro a = 10
    inteiro b = 3
    escreva("Soma   : ", a+b, "\n")
    escreva("Subtração: ", a-b, "\n")
    escreva("Multiplicação: ", a*b, "\n")
    escreva("Divisão: ", a/b, "\n")
    escreva("Resto: ", a%b, "\n")

    se (a>b){
        escreva("a é maior que b \n")
    } senao {
        escreva("a não é maior que b \n")
    }

    logico cond
    cond = (a > 5) e (b <= 5)
    escreva("Resultado logico: ", cond, "\n")
  }
}
