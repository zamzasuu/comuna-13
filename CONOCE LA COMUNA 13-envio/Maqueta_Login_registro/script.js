document.querySelector('.registro').style.display = 'none';

const yaRegistradoLink = document.querySelectorAll('.login h3 button')[0];
const registrarseLink = document.querySelectorAll('.registro h3 button')[0];

yaRegistradoLink.addEventListener('click', mostrarFormularioRegistro);
registrarseLink.addEventListener('click', mostrarFormularioLogin);

function mostrarFormularioRegistro() {
  document.querySelector('.login').style.display = 'none';
  document.querySelector('.registro').style.display = 'block';
}

function mostrarFormularioLogin() {
  document.querySelector('.registro').style.display = 'none';
  document.querySelector('.login').style.display = 'block';
}
