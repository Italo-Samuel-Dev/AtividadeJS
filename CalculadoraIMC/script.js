function calcularIMC() {
  // Obtém os valores de peso e altura inseridos pelo usuário
  let peso = parseFloat(document.getElementById("peso").value);
  let alturaCm = parseFloat(document.getElementById("altura").value); // Altura em cm

  // Verifica se os valores são válidos
  if (isNaN(peso) || isNaN(alturaCm) || alturaCm <= 0) {
      document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos!";
      return;
  }

  // Converte altura de cm para metros
  let altura = alturaCm / 100;

  // Calcula o IMC
  let imc = peso / (altura * altura);
  let classificacao = "";

  // Determina a categoria do IMC
  if (imc < 18.5) {
      classificacao = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
      classificacao = "Sobrepeso";
  } else {
      classificacao = "Obesidade";
  }

  // Exibe o resultado formatado
  document.getElementById("resultado").innerHTML = 
      `Seu IMC é <strong>${imc.toFixed(2)}</strong> - <span>${classificacao}</span>`;
}
