//Permite a entrada de dados pelo terminal
const readline = require("readline");

// Cria uma interface para entrada e saída de dados no terminal
const rl = readline.createInterface({
  input: process.stdin, // Define o teclado como entrada de dados
  output: process.stdout, // Define o terminal como saída de dados
});

// Função para calcular a série Fibonacci
function calcularFibonacci(n) {
  let fib = [0, 1];

  // Calcula os próximos numeros da sequência até a quantidade escolhida
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib.slice(0, n);
}

// Pergunta ao usuário quantos numeros deseja na sequência de Fibonacci
rl.question("Digite a quantidade de numeros da série Fibonacci: ", (n) => {
  n = parseInt(n); // Converte a entrada para número inteiro

  // Verifica se o número é válido (positivo e maior que zero)
  if (!isNaN(n) && n > 0) {
    const fibonacci = calcularFibonacci(n);
    console.log(`\nSérie Fibonacci com ${n} numeros: ${fibonacci.join(", ")}`);
  } else {
    console.log("Por favor, digite um número inteiro válido maior que zero.");
  }

  // Fecha a interface readline para encerrar o programa
  rl.close();
});
