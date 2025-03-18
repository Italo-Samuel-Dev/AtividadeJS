//Permite a entrada de dados pelo terminal
const readline = require("readline");

// Cria uma interface para entrada e saída de dados no terminal
const rl = readline.createInterface({
  input: process.stdin, // Define que a entrada será recebida pelo terminal
  output: process.stdout, // Define que a saída será exibida no terminal
});

// Pergunta no terminal qual numero o usuário quer
rl.question("Digite um número para ver a tabuada: ", (numero) => {
  // Converte a entrada do usuário (que é uma string) para um número inteiro
  numero = parseInt(numero);

  // Verifica se a conversão funcionou e se o valor é um número válido
  if (!isNaN(numero)) {
    console.log(`\nTabuada do ${numero}:\n`); // Exibe o título da tabuada

    // Loop para calcular e exibir a tabuada do número digitado pelo usuário
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  } else {
    // Caso seja um número válido, exibe uma mensagem de erro
    console.log("Por favor, digite um número válido.");
  }

  // Fecha a interface readline para encerrar o programa
  rl.close();
});
