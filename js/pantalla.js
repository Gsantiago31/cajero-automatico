function init() {
  //variables
  var dinero = document.getElementById('dinero');
  var reset = document.getElementById('reset');
  var uno = document.getElementById('uno');
  var dos = document.getElementById('dos');
  var tres = document.getElementById('tres');
  var cuatro = document.getElementById('cuatro');
  var cinco = document.getElementById('cinco');
  var seis = document.getElementById('seis');
  var siete = document.getElementById('siete');
  var ocho = document.getElementById('ocho');
  var nueve = document.getElementById('nueve');
  var cero = document.getElementById('cero');
}

// Eventos de click

uno.onclick = function (e) {
    dinero.textContent = dinero.textContent + '1'
  }
dos.onclick = function (e) {
  resultado.textContent = resultado.textContent + '2'
}
tres.onclick = function (e) {
  resultado.textContent = resultado.textContent + '3'
}
cuatro.onclick = function (e) {
  resultado.textContent = resultado.textContent + '4'
}
cinco.onclick = function (e) {
  resultado.textContent = resultado.textContent + '5'
}
seis.onclick = function (e) {
  resultado.textContent = resultado.textContent + '6'
}
siete.onclick = function (e) {
  resultado.textContent = resultado.textContent + '7'
}
ocho.onclick = function (e) {
  resultado.textContent = resultado.textContent + '8'
}
nueve.onclick = function (e) {
  resultado.textContent = resultado.textContent + '9'
}
cero.onclick = function (e) {
  resultado.textContent = resultado.textContent + '0'
}
reset.onclick = function(e){
    resetear();
}


function resetear(){
    resultado.textContent = "";
}