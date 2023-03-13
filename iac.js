import { question } from "readline-sync";

//O Índice de Adiposidade Corporal, mais conhecido como IAC, é um método utilizado para medir a gordura corporal. Para o cálculo desse índice são utilizadas medidas antropométricas, como circunferência do quadril e altura.
//Fórmula do IAC: IAC = (quadril / (altura * sqrt(altura))) - 18
//Dado o quadril (em cm) e a altura (em cm) de uma pessoa, calcule o IAC dessa pessoa.
//IAC estiver entre 0 e 8,9 a pessoa tá "Magra". Se o IAC estiver entre 9 e 20,9 tá "Normal". Se o IAC estiver entre 21 e 25,9, tá com "Sobrepeso", e por fim se o IAC estiver entre 26 e 29,9, está em "Obesidade grau 1". 
//Considerando a informação acima, além de mostrar o IAC da pessoa, calcule para ela qual o quadril mínino e máximo que ela deveria ter para ficar na faixa Normal.

function main(){
    cabecalho()
    //entrada
    const quadril = Number(question('Tamanho do quadril? em cm '))
    const altura = Number(question('Qual sua altura?em cm '))/100

    //processamento
    const iac = calculo_iac(quadril,altura)
    const q_min = quadril_minimo(altura)
    const q_max = quadril_maximo(altura)

    //saída
    console.log(`Seu IAC é de ${iac.toFixed(2)}`)
    console.log('IAC entre 0 e 8,9 - Magra')
    console.log('IAC entre 9 e 20,9 - Normal')
    console.log('IAC entre 21 e 25,9 - Sobrepeso')
    console.log('IAC entre 26 e 29,9 - Obesidade grau 1')
    console.log(`Quadril mínimo para ficar na faixa Normal: ${q_min.toFixed(2)}cm`)
    console.log(`Quadril máximo para ficar na faixa Normal: ${q_max.toFixed(2)}cm`)

    encerramento()
}

function cabecalho(){
    console.log('-----Calculadora de Índice de Adiposidade Corporal(IAC)-----')
}

function encerramento(){
    console.log('-----Programa encerrado!-----')
}

function calculo_iac(quadril,altura){
    const iac = (quadril / (altura * Math.sqrt(altura)) - 18)
    return iac

}

function quadril_minimo(altura){
    const q_min = ((altura * Math.sqrt(altura)-18))/9
    return q_min
}

function quadril_maximo(altura){
    const q_max = ((altura * Math.sqrt(altura)-18))/20.9
    return q_max
}

main()
