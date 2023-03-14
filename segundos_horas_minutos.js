import { question } from "readline-sync";

//27. Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos segundos ele corresponde.

function main(){
    //entrada
    const n = Number(question('Valor: '))

    //processamento
    const hora = converter_hora(n)
    const minutos = converter_minutos(n)
    const segundos = converter_segundos(n)

    //saída
    console.log(`Corresponde a ${hora}h ${minutos}min e ${segundos}s.`)
}

function converter_hora(n){
    const resultado = n / 3600
    return Math.floor(resultado)
}


function converter_minutos(n){
    const resultado = n % 3600
    const min = resultado /60
    return Math.floor(min)
}

function converter_segundos(n){
    const resultado = n % 3600
    const seg = resultado % 60
    return Math.floor(seg)
}
main()