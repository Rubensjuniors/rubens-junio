const btnMenu = document.getElementById('btn-menu');

function toggleMenu (event) {
  if(event.type === 'touchstart'){
    event.preventDefault();
  }
  const nav = document.getElementById('nav');
  nav.classList.toggle('ativo');
  const ativo = nav.classList.contains("ativo");
  event.currentTarget.setAttribute('arial-expanded', ativo)
  if(ativo){
    event.currentTarget.setAttribute('arial-label', 'fechar-menu')
  }else{
    event.currentTarget.setAttribute('arial-label', 'abrir-menu')
  }
}

btnMenu.addEventListener('click', toggleMenu);
btnMenu.addEventListener('touchstart', toggleMenu);


