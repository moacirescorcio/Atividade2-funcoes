import { question } from "readline-sync";

//Dada a distância da prova (em metros) e a velocidade média do atleta (em km/h), calcule o tempo da prova em minutos.
//tempo = (distância / (velocidade * 1000)) * 60

function main(){
    cabecalho()
    //entrada
    const vel = Number(question('Qual a velocidade média? em Km/h '))
    const dist = Number(question('Qual a distância da prova? em metros '))
    const velocidade = (vel*1000)/60

    //processamento
    const resultado_tempo = tempo(dist,velocidade)

    //saída
    console.log(`O participante terminou a prova em ${resultado_tempo} minutos!`)

    encerramento()
}
function cabecalho(){
    console.log('-----Tempo de prova-----')

}

function encerramento(){
    console.log('-----Programa encerrado!-----')
}

function tempo(distância,velocidade){
    tempo = (distância / velocidade) * 60
    return tempo
}
main()