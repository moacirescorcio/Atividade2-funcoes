import { question } from "readline-sync";

//36. Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.

function main(){
    //entrada
    const anos = Number(question('Anos: '))
    const meses = Number(question('Meses: '))
    const dias = Number(question('dias: '))

    //processamento
    const soma_dias = transformar_dias(anos,meses,dias)

    //saída
    console.log(`Corresponde a ${soma_dias} dias!`)
}

function transformar_dias(anos,meses,dias){
    const dias1 = anos * 365
    const dias2 = meses * 30
    const resultado = dias1 + dias2 + dias

    return resultado
}

main()