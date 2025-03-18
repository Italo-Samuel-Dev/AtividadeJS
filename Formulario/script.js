function cadastrarProduto() {
  // Capturar os valores do formulário
  let nome = document.getElementById("nome").value.trim();
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let valor = parseFloat(document.getElementById("valor").value);
  let erroNome = document.getElementById("erro-nome");
  let resultadoDiv = document.getElementById("resultado");

  // Limpar mensagens anteriores
  erroNome.textContent = "";
  resultadoDiv.innerHTML = "";

  // Validação: Nome não pode estar vazio
  if (nome === "") {
      erroNome.textContent = "O nome do produto é obrigatório!";
      return;
  }

  // Criar objeto do produto
  let produto = {
      nome: nome,
      quantidade: quantidade,
      valor: valor,
      total: quantidade * valor
  };

  // Exibir os dados do produto
  resultadoDiv.innerHTML = `
      <p><strong>Nome:</strong> ${produto.nome}</p>
      <p><strong>Quantidade:</strong> ${produto.quantidade}</p>
      <p><strong>Valor Unitário:</strong> R$ ${produto.valor.toFixed(2)}</p>
      <p><strong>Total:</strong> R$ ${produto.total.toFixed(2)}</p>
  `;
}
