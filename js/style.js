function navToggle() {
  document.querySelector('html').classList.toggle('open');
  document.getElementById('modal-gray').classList.toggle('modal-open');
}

function closeNav() {
  document.querySelector('html').classList.remove('open');
  document.getElementById('modal-gray').classList.toggle('modal-open');
}