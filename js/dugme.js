const ime = document.getElementById('user');
const mes = document.getElementById('mes');
const dugme = document.getElementById('dugme');
dugme.addEventListener('click', ispisi);
function ispisi() {
  alert(ime.value + ' je poslao poruku : \n' + mes.value);
}
