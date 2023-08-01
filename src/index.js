//Archivo JS donde se declaran constantes y funciones para capturar las metricas, el texto en TEXTAREA y funcionalidad del botón para borrar contenido 

//Declaración de variables para captura de métricas en los box models

//estructura de querySelector para capturar por atributo "document.querySelector('tag[atributo="valor"]');"//
const listWordCount = document.querySelector('li[data-testid="word-count"]');
const listCharCount = document.querySelector('li[data-testid="character-count"]');
const listCharNoSpace = document.querySelector('li[data-testid="character-no-spaces-count"]');
const listNumberCount = document.querySelector('li[data-testid="number-count"]');
const listNumberSum = document.querySelector('li[data-testid="number-sum"]');
const listWordAverage = document.querySelector ('li[data-testid="word-length-average"]');

//Captura de lo que se ingresa dentro del TEXTAREA 
//const textarea = document.getElementsByName("user-input")[0];*/ /*Si se pone [0] con querySelector no funcionara porque inmediatamente detecta al primer elemento del textarea, ya que no es una lista como QuerySelectorAll, por lo tanto no se necesita usar para ingresar al primer elemento*/
const textarea = document.querySelector('textarea[name="user-input"]');
//Obtiene el valor del ID del tag BUTTON
const button = document.getElementById('reset-button');


//Para borrar el texto dentro del textarea
function cleanText () {
  textarea.value='';
}

button.addEventListener('click',cleanText);
//boton.addEventListener('click',asignartexto ('Un ejemplo'));



//Para capturar texto 
/*function capturatexto() {
  console.log(textarea.value);
}

boton.addEventListener('click',capturatexto)*/


// Función para actualizar metricas 

function metrics() {

  //declaración de variables para obtener funciones de analyzer.js
  const text = textarea.value;
  const wordCount = analyzer.getWordCount(text);
  const charCount = analyzer.getCharacterCount(text);
  const charNoSpace = analyzer.getCharacterCountExcludingSpaces(text);
  const numberCount = analyzer.getNumberCount(text);
  const numberSum = analyzer.getNumberSum(text);
  const wordAverage = analyzer.getAverageWordLength(text);
  //Estructura: nombreDeVariable = documento enlazado por import (este deocumento) y export (documento de analyzer.js) . nombre de la función referenciada (varieble de donde saca los valores para aplicar las funciones)


  listWordCount.textContent = `Recuento de palabras: ${wordCount}`;
  listCharCount.textContent = `Recuento de caracteres: ${charCount}`;
  listCharNoSpace.textContent = `Recuento de caracteres sin espacios: ${charNoSpace}`;
  listNumberCount.textContent = `Recuento de numeros: ${numberCount}`;
  listNumberSum.textContent = `Suma de numeros: ${numberSum}`;
  listWordAverage.textContent = `Longitud promedio de palabras: ${wordAverage}`;

}

textarea.addEventListener('keyup', metrics);
/*const metrics = document.querySelector('textarea[name="user-input"]');

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
});*/


import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`