/*const textarea = document.getElementsByName("user-input")[0];*/ /*Si se pone [0] con querySelector no funcionara porque inmediatamente detecta al primer elemento del textarea, ya que no es una lista como QuerySelectorAll, por lo tanto no se necesita usar para ingresar al primer elemento*/

const textarea = document.querySelector('textarea[name="user-input"]');

const boton = document.getElementById('reset-button');

/*function asignartexto (texto){
  textarea.value=texto;
}*/

//Para borrar el texto dentro del textarea
function borrartexto () {
  textarea.value='';
}

boton.addEventListener('click',borrartexto);
//boton.addEventListener('click',asignartexto ('Un ejemplo'));



//Para capturar texto 
/*function capturatexto() {
  console.log(textarea.value);
}

boton.addEventListener('click',capturatexto)*/

//textarea.addEventListener('keyup', (event) =>{
/*capturametrica.addEventListener('keyup', (event) =>{
  const metrica = event.target.value;
  let metricamostrar = '';
  if( metrica !== ''){
    metricamostrar = metrica; }

  else {
    metricamostrar = '0'; }

  document.getElementsById('palabra').innerHTML = metricamostrar;
});*/


import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`