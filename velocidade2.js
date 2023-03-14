import { question } from "readline-sync";

//6. Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)

function main(){
    //entrada
    const vel_km = Number(question('Velocidade em Km/h: '))

    //processamento
    const vel_ms = tansformar_km_ms(vel_km)

    //saída
    console.log(`Em m/s é igual a ${vel_ms.toFixed(1)}`)
}

function tansformar_km_ms(vel_km){
    const resultado = vel_km / 3.6
    return resultado
}


main()