const form = document.getElementById("formCadastro");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const dataInput = document.getElementById("dataNascimento").value;

  //* Objeto alinhado com o Prisma (Snake_Case)
  const dados = {
    nome: nome,
    email: email,
    data_nascimento: dataInput
      ? new Date(dataInput).toISOString()
      : new Date().toISOString(),
  };

  try {
    const res = await fetch("/cadastro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });

    if (res.ok) {
      alert("Inscrição realizada! Verifique seu e-mail para confirmar.");
      form.reset();
    } else {
      const dadosErro = await res.json();
      console.log("Resposta do servidor:", dadosErro);

      let mensagemParaExibir = "";

      if (dadosErro.errors && Array.isArray(dadosErro.errors)) {
        mensagemParaExibir = dadosErro.errors.join("\n"); //* Junta os erros com uma quebra de linha
      } 

      else if (dadosErro.message) {
        mensagemParaExibir = dadosErro.message;
      } 
      else {
        mensagemParaExibir = "Erro desconhecido ao realizar cadastro.";
      }

      alert(mensagemParaExibir);
    }
    } catch (err) {
    console.error("Erro na requisição:", err);
    alert("O servidor parece estar offline ou ocorreu um erro de conexão.");
  }
})
