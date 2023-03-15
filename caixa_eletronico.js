import { question } from "readline-sync";

//45. Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o critério da distribuição ótima.

function main(){
    //entrada
    const quantia = Number(question('Digite o valor: '))

    //processamento
    const notas = qnt_notas(quantia)

    //saída
    console.log(notas)

}

function qnt_notas(quantia){
    const cem = Math.floor(quantia / 100)
    const resto = quantia % 100
    const ciquenta = Math.floor(resto / 50)
    const resto2 = resto % 50
    const vinte = Math.floor(resto2/20)
    const resto3 = resto2 % 20
    const dez = Math.floor(resto3 / 10)
    const resto4 = resto3 % 10
    const cinco = Math.floor(resto4 / 5)
    const resto5 = resto4 % 5
    const dois = Math.floor(resto5 / 2)
    const um  = resto5 % 2

    return (`Serão ${cem} notas de R$100, ${ciquenta} de R$50, ${vinte} de R$20, ${dez} de R$10, ${cinco} de R$5, ${dois}de R$2 e ${um} de R$1.`)
}

main()