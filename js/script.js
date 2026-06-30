/*MENU*/
console.log('SmartFactory carregado com sucesso!');

/*CONTATO*/
const formulario = document.getElementById('formContato');

if (formulario) {
  formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Verifica nome
    if (nome.trim() === '') {
      alert('Por favor, digite seu nome.');
      return;
    }

    // Verifica email
    if (!email.includes('@')) {
      alert('Digite um email válido.');
      return;
    }

    // Verifica mensagem
    if (mensagem.trim() === '') {
      alert('Digite uma mensagem.');
      return;
    }

    // Sucesso
    alert('Mensagem enviada com sucesso!');

    formulario.reset();
  });
}

// DARK MODE
const darkModeBtn = document.getElementById('darkModeBtn');

if (darkModeBtn) {
  darkModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  });
}

// CONTADOR ANIMADO
const contadores = document.querySelectorAll('.contador');

contadores.forEach((contador) => {
  contador.innerText = '0';

  const atualizarContador = () => {
    const alvo = +contador.getAttribute('data-target');

    const valorAtual = +contador.innerText;

    const incremento = alvo / 100;

    if (valorAtual < alvo) {
      contador.innerText = `${Math.ceil(valorAtual + incremento)}`;

      setTimeout(atualizarContador, 30);
    } else {
      contador.innerText = alvo;
    }
  };

  atualizarContador();
});
