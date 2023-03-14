import { question } from "readline-sync";

//24. Leia um valor em m, calcule e escreva o equivalente em cm.

function main(){
    //entrada
    const metro = Number(question('Valor em metros: '))

    //processamento
    const cm = converter_m_cm(metro)

    //saída
    console.log(`Valor corresponde a ${cm} cm.`)

}

function converter_m_cm(metro){
    const resultado = metro * 100
    return resultado
}

main()