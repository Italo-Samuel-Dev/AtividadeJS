//Permite a entrada de dados pelo terminal
const readline = require("readline");

// Cria uma interface para entrada e saída de dados no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Gera um número aleatório entre 1 e 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

// Função que solicita ao usuário um palpite e verifica se está correto
function tentarAdivinhar() {
  rl.question("Tente adivinhar o número entre 1 e 10: ", (palpite) => {
    palpite = parseInt(palpite); // Converte a entrada para um número inteiro

    // Verifica se a entrada é válida
    if (isNaN(palpite) || palpite < 1 || palpite > 10) {
      console.log("Por favor, digite um número válido entre 1 e 10.");
      return tentarAdivinhar(); // Pede um novo palpite
    }

    // Compara o palpite com o número secreto
    if (palpite === numeroSecreto) {
      console.log(`Parabéns! Você acertou! O número era ${numeroSecreto}.`);
      rl.close(); // Fecha a interface e encerra o programa
    } else if (palpite < numeroSecreto) {
      console.log("Errado! O número é MAIOR. Tente novamente.");
      tentarAdivinhar(); 
    } else {
      console.log("Errado! O número é MENOR. Tente novamente.");
      tentarAdivinhar(); 
    }
  });
}

// Inicia o jogo chamando a função
tentarAdivinhar();
