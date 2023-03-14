import { question } from "readline-sync";

//9. Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).

function main(){
    //entrada
    const a = Number(question('Primeiro número: '))
    const b = Number(question('Segundo número: '))

    //processamento
    const inverso_a = inverter_a(b)
    const inverso_b = inverter_b(a)

    //saída
    console.log(`Os números eram (${a},${b}) e inverso fica (${inverso_a},${inverso_b}).`)
}


function inverter_a(b){
    const resultado = b
    return resultado
}

function inverter_b(a){
    const resultado = a
    return resultado
}

main()