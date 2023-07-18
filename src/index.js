const textarea = document.getElementsByName("user-input")[0];
const boton = document.getElementById('reset-button');

boton.addEventListener('click',borrartexto);

function borrartexto () {
    textarea.value='';
} 




import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`