document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form-cadastro").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const bi = document.getElementById("bi").files[0];
    const certificado = document.getElementById("certificado").files[0];
    const senha = document.getElementById("senha").value;

    if (!nome || !email || !bi || !certificado || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const mensagem = `Olá! Eu gostaria de me cadastrar no SEPE.%0A
*Nome:* ${nome}%0A
*Email:* ${email}%0A
*Nome do arquivo BI:* ${bi.name}%0A
*Nome do arquivo Certificado:* ${certificado.name}%0A
*Senha:* ${senha}`;

    const numeroWhatsApp = "244937435613";
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
    window.open(linkWhatsApp, '_blank');

    document.getElementById("form-cadastro").reset();
  });
});
