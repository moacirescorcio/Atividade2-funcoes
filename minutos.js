import { question } from "readline-sync";

//3. Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.

function main(){
    //entrada
    const minutos = Number(question('Valor em minutos: '))

    //processamento
    const valor_horas = horas(minutos)
    const valor_minutos = resto_minutos(minutos)

    //saída
    console.log(`O valor em minutos corresponde a ${valor_horas}h e ${valor_minutos}min!`)

}

function horas(minutos){
    const resultado = minutos / 60
    return Math.floor(resultado)
}

function resto_minutos(minutos){
    const resultado = minutos % 60
    return resultado
}

main()