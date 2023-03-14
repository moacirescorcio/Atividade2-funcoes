import { question } from "readline-sync";

//30. Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele corresponde.

function main(){
    //entrada
    const n = Number(question('Número inteiro de minutos: '))

    //processamento
    const dias = converter_dias(n)
    const horas = converter_horas(n)
    const minutos = converter_minutos(n)

    //saída
    console.log(`O valor corresponde a ${dias} dias, ${horas}h e ${minutos}min.`)
}


function converter_dias(n){
    const resultado = n / 1440
    return Math.floor(resultado)
}

function converter_horas(n){
    const resto = n % 1440
    const resultado = resto / 60
    return Math.floor(resultado)
}

function converter_minutos(n){
    const resto = n % 1440
    const resultado = resto % 60
    return Math.floor(resultado)
}

main()