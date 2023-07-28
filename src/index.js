//Archivo JS donde se declaran constantes y funciones para capturar las metricas, el texto en TEXTAREA y funcionalidad del botón para borrar contenido 
//Declaración de variables para captura de métricas
//estructura de querySelector para capturar por atributo "document.querySelector('tag[atributo="valor"]');"
const listWordCount = document.querySelector('li[data-testid="word-count"]');
const listCharCount = document.querySelector('li[data-testid="character-count"]');
const listCharNoSpace = document.querySelector('li[data-testid="character-no-spaces-count"]');
const listNumberCount = document.querySelector('li[data-testid="number-count"]');
const listNumberSum = document.querySelector('li[data-testid="number-sum"]');
const listWordAverage = document.querySelector ('li[data-testid="word-length-average"]');







//Captura lo que se ingresa dentro del TEXTAREA 
//const textarea = document.getElementsByName("user-input")[0];*/ /*Si se pone [0] con querySelector no funcionara porque inmediatamente detecta al primer elemento del textarea, ya que no es una lista como QuerySelectorAll, por lo tanto no se necesita usar para ingresar al primer elemento*/
const textarea = document.querySelector('textarea[name="user-input"]');

const button = document.getElementById('reset-button');


/*function asignartexto (texto){
  textarea.value=texto;
}*/

//Para borrar el texto dentro del textarea
function borrartexto () {
  textarea.value='';
}

button.addEventListener('click',borrartexto);
//boton.addEventListener('click',asignartexto ('Un ejemplo'));



//Para capturar texto 
/*function capturatexto() {
  console.log(textarea.value);
}

boton.addEventListener('click',capturatexto)*/

const metrics = document.querySelector('textarea[name="user-input"]');

metrics.addEventListener('keyup', (event) =>{
  const texto = event.target.value;
  console.log(texto);
  let showMetrics = '';
  if (texto !== ''){
    showMetrics = texto;
  }
  else {
    showMetrics = 'Ingresa un valor';
  }
  document.querySelector('li[data-testid="word-count"]').innerHTML = showMetrics;
});


import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`