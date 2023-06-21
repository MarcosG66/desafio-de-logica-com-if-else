const prompt = require('prompt-sync')();


const operacao= (prompt('Informe a operação desejada: '))
const num1 = Number(prompt('Informe o primeiro número: '))
const num2 = Number(prompt('Informe o segundo número: '))


function calcula (operacao,num1,num2) {
    if (operacao == '+') {
        return 'O resultado da soma é: ' + (num1 + num2)
    }
    if (operacao == '-') {
        return 'O resultado da subtração é: ' + (num1 - num2)
    }
    if (operacao == '*') {
        return 'O resultado da multiplicação é: ' + (num1 * num2)
    }
    if (operacao == '/') {
        return 'O resultado da divisão é: ' + (num1 / num2)
    }
    return "Operação invalida!"
}

const output = calcula(operacao,num1,num2)
console.log(output)
  
