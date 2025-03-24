async function buscarUsuario() {
  const userId = document.getElementById("userId").value;
  const resultado = document.getElementById("resultado");

  // Limpa a tela antes de buscar
  resultado.innerHTML = "";

  if (!userId) {
      resultado.innerHTML = "Digite um ID válido!";
      return;
  }

  try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

      if (!response.ok) {
          throw new Error("Usuário não encontrado!");
      }

      const user = await response.json();

      resultado.innerHTML = `
          <p><strong>Nome:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Telefone:</strong> ${user.phone}</p>
          <p><strong>Empresa:</strong> ${user.company.name}</p>
      `;
  } catch (error) {
      resultado.innerHTML = "Usuário não encontrado!";
  }
}
