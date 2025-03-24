//Permite a entrada de dados pelo terminal
const readline = require("readline");

// Cria uma interface para entrada e saída de dados no terminal
const rl = readline.createInterface({
  input: process.stdin, // Define que a entrada será recebida pelo terminal
  output: process.stdout, // Define que a saída será exibida no terminal
});

let tabuleiro = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

function exibirTabuleiro() {
    console.log(`
     ${tabuleiro[0]} | ${tabuleiro[1]} | ${tabuleiro[2]} 
    ---+---+---
     ${tabuleiro[3]} | ${tabuleiro[4]} | ${tabuleiro[5]} 
    ---+---+---
     ${tabuleiro[6]} | ${tabuleiro[7]} | ${tabuleiro[8]} 
    `);
}

function verificarVencedor(simbolo) {
    const combinacoes = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
        [0, 4, 8], [2, 4, 6] // Diagonais
    ];
    return combinacoes.some(comb => comb.every(index => tabuleiro[index] === simbolo));
}

function jogadaComputador() {
    let posicoesDisponiveis = tabuleiro.map((val, index) => val === " " ? index : null).filter(v => v !== null);
    let escolha = posicoesDisponiveis[Math.floor(Math.random() * posicoesDisponiveis.length)];
    tabuleiro[escolha] = "O";
}

function verificarEmpate() {
    return tabuleiro.every(pos => pos !== " ");
}

function jogadorJoga() {
    exibirTabuleiro();
    rl.question("Escolha uma posição (1-9): ", function (posicao) {
        let index = parseInt(posicao) - 1;
        if (index < 0 || index > 8 || tabuleiro[index] !== " ") {
            console.log("Jogada inválida! Tente novamente.");
            return jogadorJoga();
        }
        tabuleiro[index] = "X";

        if (verificarVencedor("X")) {
            exibirTabuleiro();
            console.log("Você venceu! Parabéns!");
            return rl.close();
        }

        if (verificarEmpate()) {
            exibirTabuleiro();
            console.log("O jogo empatou!");
            return rl.close();
        }

        jogadaComputador();

        if (verificarVencedor("O")) {
            exibirTabuleiro();
            console.log("O computador venceu!");
            return rl.close();
        }

        jogadorJoga();
    });
}

console.log("Você joga com 'X' e o computador com 'O'.");
console.log("Posições do tabuleiro:");
console.log(`
 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
`);
jogadorJoga();
