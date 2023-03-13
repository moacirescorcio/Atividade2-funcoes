import { question } from "readline-sync";

//Cálculo do déficit calórico médio diário para alcançar meta de perda de peso. Uma pessoa estabeleceu como meta perder X % do Peso Corporal em Y semanas. Sabendo que 1 kg de gordura corresponde a cerca de 7700 kcal, calcule o déficit calórico médio diário necessário para alcançar essa meta. Pergunte ao usuário qual seu Peso atual, qual sua meta % de redução de Peso e em quantas semanas. Pergunte ainda quanto ele tá disposto a consumir de kcal diariamente. 

function main(){
    const peso = Number(question('Qual seu peso? '))
    const meta = Number(question('Qual sua meta de redução? em % '))
    const semanas = Number(question('Em quantas semanas? '))

    const reducao_peso = reducao_de_peso(peso, meta)
    const calorias_totais = calorias(reducao_peso)
    const calorias_por_dia = qnt_dias(calorias_totais, semanas)

    console.log(`Déficit calórico diário: ${calorias_por_dia.toFixed(2)}`)

    const disposto = Number(question('Quanto está disposto a consumir por dia? em Kcal '))
    const consumo_total = disposto + calorias_por_dia
    console.log(`Você deverá gastar diariamente ${consumo_total.toFixed(2)} com atividades físicas!`)
}

function reducao_de_peso(peso,meta){
    const reducao_de_peso = peso *(meta/100)
    return reducao_de_peso
}

function calorias(reducao_peso){
    const calorias = reducao_peso * 7700
    return calorias
}

function qnt_dias(calorias_totais, semanas){
    const qnt_por_dia = calorias_totais / (semanas*7)
    return qnt_por_dia
}

main()