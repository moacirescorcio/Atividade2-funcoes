import { question } from "readline-sync";

//18. Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)

function main(){
    //entrada
    const raio = Number(question('Raio da circunferência: '))

    //processamento
    const comprimento = calcular_comprimento(raio)

    //saída
    console.log(`O comprimento da circuferência corresponde a ${comprimento.toFixed(2)}cm`)
}

function calcular_comprimento(raio){
    const resultado = 2 * 3.14 * raio
    return resultado
}

main()