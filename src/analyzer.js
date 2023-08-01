

const analyzer = {  
  getWordCount:(text) =>{
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`. 
    const word = text.trim().split(/\s+/).filter(Boolean);
    return word.length;
    //La propiedad length devuelve un número entero que representa el número de caracteres de una cadena. Es una propiedad de solo lectura que no podrás modificar salvo que cambie la longitud de la cadena. En caso de que la cadena esté vacía, su longitud será 0.
    //El método trim() elimina los espacios en blanco al inicio y al final de la cadena.
    //El método split() divide la cadena de texto en palabras individuales utilizando un separador, puede ser una cadena o una expresión regular. Si se omite el separador, se dividirá la cadena en caracteres individuales.
    //La expresión regular /\s+/ coincide con cualquier cantidad de espacios en blanco, lo que permite separar las palabras por espacios.
    //Boolean es un filtro para eliminar espacios consecutivos que el programa puedar considerar palabras 
    /*const textarea = document.querySelector('name="user-input"').value;
    characternum = text.length;

    const textareadiv = textarea.split("");
    const wordnum = textareadiv.length;*/
    /*let contador = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i]===' ') {
        contador =contador+1;
      }
    }
    console.log(contador);*/
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    let countCharacter = 0;
    //const spaces = /\s+/;
    const punctuationMarks = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~¡¿«»“”‘’´¨\s]/g;// Expresión regular para excluir sirgnos de puntuación
    for (let i = 0; i < text.length; i++) {
      //! (negación) se utiliza aquí para INVERTIR el resultado de punctuationmarks.test(text[i]). Si el resultado original era true (es decir, el carácter actual es un carácter de puntuación o espacio en blanco), la negación lo convierte en false. Si el resultado original era false, la negación lo convierte en true.
      if (text[i] !== ' ' && !punctuationMarks.test(text[i])) {
        countCharacter = countCharacter + 1;
      }
    }
    return countCharacter;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    /*const word = text.trim().split(/[^a-zA-Z0-9]+/).filter(Boolean);
    let totalWordLength = 0; 
    if (word.length > 0 ){
      for (let i = 0; i < word.length; i++) {
        totalWordLength = totalWordLength + word[i].length;
      }
      const average = totalWordLength / word.length;
      return parseFloat(average.toFixed(2)); //toFixed(2) es un método para delimitar a decimales, en este caso a dos decimales (2).
    }
    return 0;*/
    // con el código anterior no pude lograr que me diera el numero de 5.53 para las pruebas pero daba 5.63
    text = text.trim();
    const words = text.split(" ");
    let charNumber = 0;
    words.forEach(word => charNumber = charNumber + word.length);
    const average = charNumber/words.length;
    return parseFloat(average.toFixed(2));
   
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.

    /*const numbersCount = text.replace(/[^0-9.]+/g, ''); 
    //replace() se usa para buscar y reemplazar partes de una cadena por otra cosa, en este caso descarta todo menos los numeros.
    // (/[^0-9]+/g, '') Expresión regular  para eliminar todos los caracteres que no sean números 
    //Y gracias a la propiedad length regresa la cantidad de numeros que hay dentro del texto, pero no suma su valor, como el caso de conteo de palabras y caracteres*/


    const numbersCount = text.match(/(?<!\w)\d+(\.\d+)?(?!\w)/g);
    //Lo que hace la expresión regular, parte por parte:
    /*(?<!\w): Es un "lookbehind" negativo que asegura que el número no esté precedido por un carácter de palabra (\w). Esto significa que solo encontrará números "solos", que no están dentro de una palabra.
    \d+: Busca uno o más dígitos (0-9). Esto representa la parte entera del número.
    (\.\d+)?: Es un grupo opcional que busca un punto seguido de uno o más dígitos (0-9). Esto representa la parte decimal del número. El signo de interrogación indica que esta parte decimal es opcional, por lo que el número puede ser entero o decimal.
    (?!\w): Es un "lookahead" negativo que asegura que el número no esté seguido por un carácter de palabra (\w). Esto evita que se cuenten números que forman parte de una palabra.
    g: Esta "bandera" indica que la búsqueda se realizará globalmente en todo el texto, no solo en la primera coincidencia. */

    if (numbersCount !== null) {
      return numbersCount.length;
    } 
    else {
      return 0;
    }

    /*Una forma de abreviar if:
    const numbersCount = text.match(/(?<!\w)\d+(\.\d+)?(?!\w)/g);
    return numbersCount ? numbersCount.length: 0; 
    Donde '?' evalua si numbersCount contiene un numero.
    ':' Es la separación entre el valor que se devuelve si la condición es verdadera y el valor que se devuelve si la condición es falsa.
    Si es verdadero (tiene al menos un numero), entonces se devuelve la cantidad de números encontrados (numbersCount.length).
    En caso de que sea es falso o nulo(no contiene ningún número ), entonces se devuelve 0.*/


    
     
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numbersCount = text.match(/\b\d+(\.\d+)?\b/g); //busca en el texto todos los números, tanto enteros como decimales, y los devuelve como un array de strings. 
    let sum = 0;

    if (numbersCount) {
      for (let i = 0; i < numbersCount.length; i++) {
        sum = sum + parseFloat(numbersCount[i]); //parseFloat convierte los caracteres de strings en numeros para despues sumarlos
      }
    }

    return sum;
  }
};

export default analyzer;
