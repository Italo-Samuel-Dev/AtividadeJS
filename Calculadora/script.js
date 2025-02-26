let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação (+, -, *, /, %, **):");

let resultado;
switch (operacao) {
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        resultado = num2 !== 0 ? num1 / num2 : "Erro: divisão por zero não permitida";
        break;
    case "%":
        resultado = num1 % num2;
        break;
    case "**":
        resultado = num1 ** num2;
        break;
    default:
        resultado = "Operação inválida";
}

document.body.innerHTML = `
    <h1>Calculadora</h1>
    <p>Número 1: ${num1}</p>
    <p>Número 2: ${num2}</p>
    <p>Operação: ${operacao}</p>
    <h2>Resultado: ${resultado}</h2>
`;
5