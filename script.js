function validarFormulario() {
    limparAlertas();

  var nome = document.getElementById('nome').value;
  var telefone = document.getElementById('telefone').value;
  var email = document.getElementById('email').value;
  var mensagem = document.getElementById('mensagem').value;

  var isValido = true;

  if (nome.trim() === '') {
    exibirAlerta('alertaNome', 'Por favor, preencha o campo Nome.');
    isValido = false;
  }

  if (telefone.trim() === '') {
    exibirAlerta('alertaTelefone', 'Por favor, preencha o campo Telefone.');
    isValido = false;
  }

  if (email.trim() === '') {
    exibirAlerta('alertaEmail', 'Por favor, preencha o campo E-mail.');
    isValido = false;
  }

  if (mensagem.trim() === '') {
    exibirAlerta('alertaMensagem', 'Por favor, preencha o campo Mensagem.');
    isValido = false;
  }


  return isValido;
}

function exibirAlerta(idAlerta, mensagem) {
  var alerta = document.getElementById(idAlerta);
  alerta.textContent = mensagem;
}

function limparAlertas() {
  exibirAlerta('alertaNome', '');
  exibirAlerta('alertaTelefone', '');
  exibirAlerta('alertaEmail', '');
  exibirAlerta('alertaMensagem', '');
}