//Permite a entrada de dados pelo terminal
const readline = require("readline");

// Cria uma interface para entrada e saída de dados no terminal
const rl = readline.createInterface({
  input: process.stdin, // Define que a entrada será recebida pelo terminal
  output: process.stdout, // Define que a saída será exibida no terminal
});

// Funções matemáticas
function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return b !== 0 ? a / b : "Erro: divisão por zero!";
}

// Solicita entrada do usuário
rl.question("Digite o primeiro número: ", function (num1) {
  rl.question("Digite o segundo número: ", function (num2) {
    rl.question("Escolha a operação (+, -, *, /): ", function (operacao) {
      let resultado;
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      switch (operacao) {
        case "+":
          resultado = soma(num1, num2);
          break;
        case "-":
          resultado = subtracao(num1, num2);
          break;
        case "*":
          resultado = multiplicacao(num1, num2);
          break;
        case "/":
          resultado = divisao(num1, num2);
          break;
        default:
          resultado = "Operação inválida!";
      }

      console.log(`Resultado: ${resultado}`);
      // Fecha a interface readline para encerrar o programa
      rl.close();
    });
  });
});
