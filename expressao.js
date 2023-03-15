import { question } from "readline-sync";

//39. Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:

function main(){
    //entrada
    const a = Number(question('Primeiro número: '))
    const b = Number(question('Segundo número: '))
    const c = Number(question('Terceiro número: '))

    //processamento
    const r = calculo_r(a,b)
    const s = calculo_s(b,c)
    const d = calculo_d(r,s)

    //saída
    console.log(`Fórmula R: ${r}`)
    console.log(`Fórmula S: ${s}`)
    console.log(`Fórmula D: ${d}`)

}

function calculo_r(a,b){
    const resultado = (a+b)**2
    return resultado
}

function calculo_s(b,c){
    const resultado = (b+c)**2
    return resultado
}

function calculo_d(r,s){
    const resultado = (r+s)/2
    return resultado
}

main()