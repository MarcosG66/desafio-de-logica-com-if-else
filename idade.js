const prompt = require('prompt-sync')();

const idadeInput = prompt('Informe sua idade: ');

const verificarIdade = (idade) => {
    if (idade < 0.1) {
        return 'Idade Inválida'
    }
    if (idade < 18) {
        return 'Você é menor de idade'
    }
    if (idade < 60) {
        return 'Você é maior de idade'
    }
    return 'Você é idoso'
}

const output = verificarIdade (idadeInput)

console.log(output)