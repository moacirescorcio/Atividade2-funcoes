import { question } from "readline-sync";

//"Calculadora de Batimentos Cardíacos" Crie um programa que receba a idade de uma pessoa e calcule a sua frequência cardíaca máxima, que é dada pela fórmula 220 menos a idade. O programa deve então calcular a faixa de batimentos cardíacos ideais para atividades físicas moderadas e intensas, que correspondem a 50-70% e 70-85% da frequência cardíaca máxima, respectivamente. Os resultados devem ser exibidos na tela. Nome do arquivo: calculadora_batimentos.js

function main(){
    cabecalho()
    //entrada
    const idade = Number(question('Qual sua idade? '))

    //processamento
    const freq_maxima = frequencia_maxima(idade)

    //batimentos ideiais
    const bat_ideal1 = bat_ideal_mod(freq_maxima)
    const bat_ideal2 = bat_ideal_mod2(freq_maxima)
    const bat_ideal3 = bat_ideal_int(freq_maxima)

    //saída
    console.log(`Sua frequência cardíaca máxima é de ${freq_maxima.toFixed(0)}`)
    console.log(`Batimento ideal para atividade moderada é entre ${bat_ideal1.toFixed(0)} e ${bat_ideal2.toFixed(0)}`)
    console.log(`Batimento ideal para atividade intensa é entre ${bat_ideal2.toFixed(0)} e ${bat_ideal3.toFixed(0)}`)

    //encerramento
    encerramento()

    

}

function cabecalho(){
    console.log('-----Calculadora de batimentos-----')
}

function encerramento(){
    console.log('-----Obrigado por utilizar-----')
}

function frequencia_maxima(idade){
    const resultado = 220 - idade
    return resultado
}

function bat_ideal_mod(freq_maxima){
    const resultado = freq_maxima * 0.50
    return resultado
}

function bat_ideal_mod2(freq_maxima){
    const resultado = freq_maxima * 0.70
    return resultado
}

function bat_ideal_int(freq_maxima){
    const resultado = freq_maxima * 0.85
    return resultado
}
main()