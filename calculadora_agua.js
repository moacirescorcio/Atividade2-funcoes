import { question } from "readline-sync";

//"Calculadora de Água" Crie um programa que receba o peso e a atividade física diária de uma pessoa e calcule a quantidade de água que ela deve beber por dia. A quantidade de água recomendada é de 35 ml por quilo de peso para pessoas com atividade física moderada, e 45 ml por quilo de peso para pessoas com atividade física intensa. O resultado do cálculo deve ser exibido na tela. Nome do arquivo: calculadora_agua.js

function main() {
  cabecalho();
  const peso = Number(question("Qual o seu peso em Kg? "))
  const atividade = question("Qual o seu nível de atividade física diária? Moderada ou intensa")

  const agua_moderada = qnt_agua_moderada(peso)
  const agua_intensa = qnt_agua_intesa(peso)

  console.log(`Para atividades moderadas a quantidade de água necessária é ${agua_moderada.toFixed(2)} litros por dia `)
  console.log(`Para atividades intensa a quantidade de água necessária é ${agua_intensa.toFixed(2)} litros por dia`)

  encerramento()
}

function cabecalho() {
  console.log("-------------Calculadora de água-------------")
}

function encerramento() {
  console.log("-------------Programa encerrado-------------")
}

function qnt_agua_moderada(peso) {
  const qnt_agua_moderada = (35 * peso)/1000
  return qnt_agua_moderada
}

function qnt_agua_intesa(peso) {
  const qnt_agua_intensa = (45 * peso)/1000
  return qnt_agua_intensa
}
main()
