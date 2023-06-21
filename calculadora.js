// Soma dois números
const soma = (num1,num2) => {
        return num1 + num2
}

// Subtrai dois números
const subtrai = (num1,num2) => {
        return num1 - num2
}

// Multiplica dois números
const multiplica = (num1,num2) => {
        return num1 * num2
}

// Divide dois números
const divide = (num1,num2) => {
        return num1 / num2

}

// Gera a saída de texto
const geraSaida = (num1,num2,resultado,operacao) => {
    return `O resultado de ${num1} ${operacao} ${num2} é: ${resultado}`
}

// Calcula o resultado de acordo com a operação informada
const calcula = (num1,num2,operacao) => {
    switch (operacao) {
        case '+': 
            return soma(num1,num2)
        case '-': 
            return subtrai(num1,num2)
        case '*': 
            return multiplica(num1,num2)
        case '/': 
            return divide(num1,num2)
    }
}

const principal = () => {
    // Cria um prompt para entrada de dados
    const prompt = require('prompt-sync')();
    
    // Captura a operação desejada
    const operacao = (prompt('Informe a operação desejada ( + , - , * ou / ): '))
    
    // Captura os números
    const num1 = Number(prompt('Informe o primeiro número: '))
    const num2 = Number(prompt('Informe o segundo número: '))
    
    // Calcula o resultado
    const resultado = calcula(num1,num2,operacao)

    // Gera a saida de texto
    const saidaDeTexto = geraSaida(num1,num2,resultado,operacao)
    
    // Imprime o resultado
    console.log(saidaDeTexto)
}

// Roda o programa
principal()
  
