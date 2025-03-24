//Permite a entrada de dados pelo terminal
const readline = require("readline");

// Cria uma interface para entrada e saída de dados no terminal
const rl = readline.createInterface({
  input: process.stdin, // Define que a entrada será recebida pelo terminal
  output: process.stdout, // Define que a saída será exibida no terminal
});

// Função para calcular os pontos
function calcularPontos() {
    let totalPontos = 0;

    // Função para ler as 6 partidas
    function perguntaPartida(i) {
        rl.question(`Digite o resultado da partida ${i} (ganhou/perdeu): `, (resultado) => {
            // Tratamento do resultado
            if (resultado === "ganhou") {
                totalPontos += 3; // Ganhou - 3 pontos
            } else if (resultado === "perdeu") {
                totalPontos += 1; // Perdeu - 1 ponto
            } else {
                console.log("Resultado inválido. Digite 'ganhou' ou 'perdeu'.");
                perguntaPartida(i); // Repetir a pergunta caso o input seja inválido
                return;
            }

            // Verifica se todas as partidas foram respondidas
            if (i < 6) {
                perguntaPartida(i + 1);
            } else {
                // Exibe o total de pontos
                console.log(`O time tem ${totalPontos} pontos no total.`);
                
                // Verifica se o time é o campeão
                if (totalPontos >= 15) {
                    console.log("O time é o campeão!");
                } else {
                    console.log("O time não é o campeão.");
                }

                rl.close(); // Fecha a interface após exibir o resultado
            }
        });
    }

    // Começa a perguntar pela primeira partida
    perguntaPartida(1);
}

// Chama a função para rodar o programa
calcularPontos();

//O time deve ganhar pelo menos 5 partidas para ser o campeão, considerando que ele recebe 3 pontos por vitória.