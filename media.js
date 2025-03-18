//Permite a entrada de dados pelo terminal
const readline = require('readline');

// Cria uma interface para entrada e saída de dados no terminal
const rl = readline.createInterface({
  input: process.stdin,  // Define a entrada de dados como o teclado
  output: process.stdout // Define a saída como o terminal
});

// Função para calcular a média e determinar a situação do aluno
function calcularMediaENota(nota1, nota2) {
  
  const media = (nota1 + nota2) / 2;

  let situacao;

  // Verifica em qual faixa de notas o aluno se encaixa
  if (media >= 0 && media <= 4.5) {
    situacao = "Aluno Reprovado";
  } else if (media >= 5 && media <= 6.5) {
    situacao = "Aluno em Recuperação";
  } else if (media >= 7 && media <= 10) {
    situacao = "Aluno Aprovado";
  } else {
    situacao = "Notas inválidas"; // Caso as notas estejam fora do intervalo de 0 a 10
  }

  // Exibe a média e a situação do aluno com duas casas decimais
  console.log(`\nMédia: ${media.toFixed(2)}`);
  console.log(`Situação: ${situacao}`);
}

// Pergunta a primeira nota ao usuário
rl.question('Digite a primeira nota: ', (nota1) => {
  // Converte a entrada para número decimal
  nota1 = parseFloat(nota1);

  // Pergunta a segunda nota ao usuário
  rl.question('Digite a segunda nota: ', (nota2) => {
    
    nota2 = parseFloat(nota2);

    // Verifica se as entradas são números válidos antes de chamar a função
    if (!isNaN(nota1) && !isNaN(nota2)) {
      calcularMediaENota(nota1, nota2);
    } else {
      console.log('Por favor, digite notas válidas.');
    }

    // Fecha a interface readline para encerrar o programa
    rl.close();
  });
});
