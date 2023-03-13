import { question } from "readline-sync";

//A Taxa Metabólica Basal (TMB) é o mínimo de energia necessária para manter as funções do organismo em repouso, como os batimentos cardíacos, a pressão arterial, a respiração e a manutenção da temperatura corporal.
//TMB para homens: TMB = 88,36 + (13,4 x peso) + (4,8 x altura) - (5,7 x idade)
//peso (em kg), a altura (em cm), a idade (em anos) e o gênero (M ou F) de uma pessoa, calcule a TMB dessa pessoa.

function main(){
    cabecalho()
    //entrada
    const peso = Number(question('Qual seu peso? em Kg '))
    const idade = Number(question('Qual sua idade? '))
    const genero = Number(question('Qual seu gênero?M ou F '))
    const altura = Number (question('Qual sua altura?em cm '))

    //processamento
    const resultado = tmb_homem(peso,idade,genero,altura)

    //saída
    console.log(`O resultado da Taxa Matabólica Basal foi de ${resultado}.`)

    encerramento()
}

function cabecalho(){
    console.log('-----Calculadora de Taxa Metabílica Basal(TMB)-----')
}

function encerramento(){
    console.log('-----Programa encerrado!-----')
}

function tmb_homem(peso,idade,genero,altura){
    const tmb = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade) //88.36 + 938+816-171
    return Math.floor(tmb)
    
}

main()