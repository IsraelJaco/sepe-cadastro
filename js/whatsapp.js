function enviarWhatsApp(dados) {
    const mensagem = `Olá, gostaria de me cadastrar no SEPE.\n\nNome: ${dados.nome}\nBI: ${dados.bi}\nEmail: ${dados.email}`;
    const telefone = dados.telefone; // Telefone do usuário (usado para envio via WhatsApp)
    
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url);
  }
  