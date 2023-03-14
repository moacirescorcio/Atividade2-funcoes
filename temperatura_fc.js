import { question } from "readline-sync";

//21. Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).

function main(){
    //entrada
    const temp_f = Number(question('Temperatura em °F: '))

    //processamento 
    const temp_c = converterf_c(temp_f)

    //resultado
    console.log(`Corresponde a ${temp_c.toFixed(0)} °C.`)
}

function converterf_c(temp_f){
    const resultado = (5 * temp_f - 160) / 9
    return resultado
}

main()