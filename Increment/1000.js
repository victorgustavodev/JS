// Definição de variáveis
let total = 0;
const numbers = [1, 2, 3, 4, 5];

// Função para calcular a média de um array de números
function calculateAverage(arr) {
    let sum = 0;
    arr.forEach(num => {
        sum += num;
    });
    return sum / arr.length;
}

// Função para imprimir uma mensagem
function printMessage(msg) {
    console.log(msg);
}

// Função para verificar se um número é primo
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Função para gerar um número aleatório entre dois valores
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Loop para calcular o total
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}

// Chamada de funções
const avg = calculateAverage(numbers);
printMessage("A média dos números é: " + avg);

// Verificação de números primos
for (let i = 0; i < 10; i++) {
    const randomNumber = generateRandomNumber(1, 100);
    if (isPrime(randomNumber)) {
        printMessage(randomNumber + " é um número primo.");
    } else {
        printMessage(randomNumber + " não é um número primo.");
    }
}

// Loop para imprimir uma sequência de Fibonacci
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

const fibSequence = fibonacci(20);
printMessage("Sequência de Fibonacci:");
printMessage(fibSequence.join(", "));

// Função para verificar se um número é par ou ímpar
function isEvenOrOdd(num) {
    return num % 2 === 0 ? "par" : "ímpar";
}

// Função para gerar uma lista de números pares e ímpares
function generateEvenOddList(min, max) {
    const result = {
        even: [],
        odd: []
    };
    for (let i = min; i <= max; i++) {
        if (isEvenOrOdd(i) === "par") {
            result.even.push(i);
        } else {
            result.odd.push(i);
        }
    }
    return result;
}

const evenOddList = generateEvenOddList(1, 20);
printMessage("Números pares: " + evenOddList.even.join(", "));
printMessage("Números ímpares: " + evenOddList.odd.join(", "));

// Função para verificar se um número é positivo, negativo ou zero
function checkPositiveNegativeZero(num) {
    if (num > 0) {
        return "positivo";
    } else if (num < 0) {
        return "negativo";
    } else {
        return "zero";
    }
}

// Função para gerar uma lista de números positivos, negativos e zeros
function generatePositiveNegativeZeroList(arr) {
    const result = {
        positive: [],
        negative: [],
        zero: []
    };
    arr.forEach(num => {
        const type = checkPositiveNegativeZero(num);
        result[type].push(num);
    });
    return result;
}

const positiveNegativeZeroList = generatePositiveNegativeZeroList([-1, 0, 1, -2, 2, 3, -3, 0]);
printMessage("Números positivos: " + positiveNegativeZeroList.positive.join(", "));
printMessage("Números negativos: " + positiveNegativeZeroList.negative.join(", "));
printMessage("Zeros: " + positiveNegativeZeroList.zero.join(", "));

// Fim do código
