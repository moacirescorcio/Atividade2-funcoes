import { question } from "readline-sync";

//33. Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso. (Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767).

function main(){
    //entrada
    const numero = Number(question('Número inteiro: '))

    //processamento
    const inverso = transformar_inverso(numero)
    const soma = inverso + numero

    //saída
    console.log(`Número inverso: ${inverso}`)
    console.log(`Soma: ${soma}`)
}

function transformar_inverso(numero){
    const c = Math.floor(numero /100)
    const resto = numero % 100
    const d = Math.floor(resto / 10)
    const u = resto % 10
    const resultado = (u*100)+(d*10)+c

    return resultado
}

main()