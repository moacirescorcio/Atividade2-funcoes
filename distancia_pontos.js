import { question } from "readline-sync";

//42. Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.

function main(){
    //entrada
    const x1 = Number(question('X1: '))
    const y1 = Number(question('Y1: '))
    const x2 = Number(question('X2: '))
    const y2 = Number(question('Y2: '))

    //processamento
    const d = formula_d(x1,y1,x2,y2)

    //saída
    console.log(`Resultado da operação: ${d}`)
}

function formula_d(x1,y1,x2,y2){
    const resultado = Math.sqrt((x2-x1)**2 + (y2 - y1)**2)
    return Math.floor(resultado)
}

main()