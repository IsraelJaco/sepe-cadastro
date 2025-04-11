document.getElementById("form-cadastro").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Coletando os dados do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const bi = document.getElementById("bi").files[0];
    const certificado = document.getElementById("certificado").files[0];
    const senha = document.getElementById("senha").value;
    const imel = document.getElementById("imel").value;
  
    // Verificando se todos os campos estão preenchidos
    if (!nome || !email || !bi || !certificado || !senha || !imel) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    // Aqui você pode processar ou enviar os dados para um servidor
    // Exemplo de como criar um objeto com os dados
    const cadastroData = new FormData();
    cadastroData.append("nome", nome);
    cadastroData.append("email", email);
    cadastroData.append("bi", bi);
    cadastroData.append("certificado", certificado);
    cadastroData.append("senha", senha);
    cadastroData.append("imel", imel);
  
    // Simulação de envio de dados (pode ser substituído por uma requisição AJAX)
    console.log("Dados do Cadastro:", cadastroData);
  
    // Enviar dados via WhatsApp ou outro canal (simulação)
    alert("Cadastro enviado com sucesso!");
  
    // Limpar o formulário
    document.getElementById("form-cadastro").reset();

    // Função para capturar os dados do formulário e gerar o link do WhatsApp
document.getElementById('form-cadastro').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Obter os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const bi = document.getElementById('bi').files[0] ? document.getElementById('bi').files[0].name : '';
    const certificado = document.getElementById('certificado').files[0] ? document.getElementById('certificado').files[0].name : '';
    const senha = document.getElementById('senha').value;
    const imel = document.getElementById('imel').value;
  
    // Criar a mensagem para o WhatsApp
    const mensagem = `Olá! Eu gostaria de me cadastrar no SEPE.\n\nNome: ${nome}\nEmail: ${email}\nBI: ${bi}\nCertificado: ${certificado}\nSenha: ${senha}\nIMEL: ${imel}`;
  
    // Substituir 'SEU_NUMERO_DE_WHATSAPP' pelo número de WhatsApp para onde enviar a mensagem
    const numeroWhatsApp = '937435613'; // Ex: +244XXXXXXXXX
  
    // Criar o link do WhatsApp
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  
    // Redirecionar para o link do WhatsApp
    window.open(linkWhatsApp, '_blank');
  });
  
  });
  