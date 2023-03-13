import { question } from "readline-sync";

//O Índice de Adiposidade Corporal, mais conhecido como IAC, é um método utilizado para medir a gordura corporal. Para o cálculo desse índice são utilizadas medidas antropométricas, como circunferência do quadril e altura.
//Fórmula do IAC: IAC = (quadril / (altura * sqrt(altura))) - 18
//Dado o quadril (em cm) e a altura (em cm) de uma pessoa, calcule o IAC dessa pessoa.
//IAC estiver entre 0 e 8,9 a pessoa tá "Magra". Se o IAC estiver entre 9 e 20,9 tá "Normal". Se o IAC estiver entre 21 e 25,9, tá com "Sobrepeso", e por fim se o IAC estiver entre 26 e 29,9, está em "Obesidade grau 1". 
//Considerando a informação acima, além de mostrar o IAC da pessoa, calcule para ela qual o quadril mínino e máximo que ela deveria ter para ficar na faixa Normal.

function main(){
    //entrada
    const quadril = Number(question('Tamanho do quadril? em cm '))
    const altura = Number(question('Qual sua altura?em cm '))

    //processamento
    const iac = iac(quadril,altura)
}
function iac(quadril,altura){
    const iac = (quadril / (altura * sqrt(altura)) - 18)
    return iac

}

main()
