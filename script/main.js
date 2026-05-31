var fontSize = window.localStorage.getItem('matari-font');

//document.getElementById("infoSection").addEventListener("click", displayDate);

window.onload = function() {
  if (fontSize === 'pgothic') {
    document.body.classList.add('MSPGothic');
  }

  else {
    document.body.classList.remove('MSPGothic');
  }
}