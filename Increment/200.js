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

// Fim do código
