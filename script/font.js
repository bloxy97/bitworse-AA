function PGothic() {
  document.body.classList.add('MSPGothic');
  window.localStorage.setItem('matari-font', 'pgothic');
}

function Gothic() {
  document.body.classList.remove('MSPGothic');
  window.localStorage.setItem('matari-font', 'gothic');
}