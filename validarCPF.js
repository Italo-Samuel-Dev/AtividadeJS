//Permite a entrada de dados pelo terminal
const readline = require("readline");

// Cria uma interface para entrada e saída de dados no termina
const rl = readline.createInterface({
  input: process.stdin, // Define que a entrada será recebida pelo terminal
  output: process.stdout, // Define que a saída será exibida no terminal
});

function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, ""); // Remove caracteres não numéricos

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false; // CPF inválido se não tiver 11 dígitos ou for repetido
  }

  function calcularDigito(cpfParcial, peso) {
    let soma = 0;
    for (let i = 0; i < cpfParcial.length; i++) {
      soma += parseInt(cpfParcial[i]) * (peso - i);
    }
    let resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  }

  let digito1 = calcularDigito(cpf.slice(0, 9), 10);
  let digito2 = calcularDigito(cpf.slice(0, 9) + digito1, 11);

  return digito1 === parseInt(cpf[9]) && digito2 === parseInt(cpf[10]);
}

// Captura CPF do usuário pelo terminal
rl.question("Digite o CPF: ", function (cpfUsuario) {
  if (validarCPF(cpfUsuario)) {
    console.log("CPF válido!");
  } else {
    console.log("CPF inválido!");
  }
  rl.close();
});
