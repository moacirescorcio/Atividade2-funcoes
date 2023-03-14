import { question } from "readline-sync";

//12. Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.

function main(){
    //entrada
    const salario = Number(question('Salário atual: '))

    //processamento
    const novo_salario = aumento(salario)

    //saída
    console.log(`Seu novo salário será R$${novo_salario.toFixed(2)}!`)
}

function aumento(salario){
    const resultado = (salario*0.25) + salario
    return resultado
}

main()