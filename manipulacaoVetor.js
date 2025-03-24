function gerarArrayAleatorio(tamanho, min, max) {
  let array = [];
  for (let i = 0; i < tamanho; i++) {
      array.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return array;
}

function ordenarCrescente(array) {
  let arr = [...array];
  for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Troca os valores
          }
      }
  }
  return arr;
}

function ordenarDecrescente(array) {
  let arr = [...array];
  for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
          if (arr[j] < arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Troca os valores
          }
      }
  }
  return arr;
}

function filtrarPares(array) {
  return array.filter(num => num % 2 === 0);
}

function filtrarImpares(array) {
  return array.filter(num => num % 2 !== 0);
}

function ehPrimo(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
}

function filtrarPrimos(array) {
  return array.filter(num => ehPrimo(num));
}

// Geração do array aleatório
let numeros = gerarArrayAleatorio(10, 1, 100);
console.log("Array original:", numeros);

let crescente = ordenarCrescente(numeros);
console.log("⬆Ordenado crescente:", crescente);

let decrescente = ordenarDecrescente(numeros);
console.log("⬇Ordenado decrescente:", decrescente);

console.log("Números pares:", filtrarPares(numeros));
console.log("Números ímpares:", filtrarImpares(numeros));
console.log("Números primos:", filtrarPrimos(numeros));
