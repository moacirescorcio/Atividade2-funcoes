import { question } from "readline-sync";

//15. Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)

function main(){
    //entrada
    const base = Number(question('Base do triângulo: '))
    const altura = Number(question('Altura do triângulo: '))

    //processamento
    const area = calcular_area_triangulo(base,altura)

    //saída
    console.log(`A área do triângulo corresponde a ${area}cm²`)
}

function calcular_area_triangulo(base,altura){
    const resultado = (base*altura)/2
    return resultado
}

main()