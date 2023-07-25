

const analyzer = {  
  getWordCount:(text) =>{
    const word = text.trim().split(/\s+/).filter(Boolean);
    return word.length;
    /*const textarea = document.querySelector('name="user-input"').value;
    characternum = text.length;

    const textareadiv = textarea.split("");
    const wordnum = textareadiv.length;*/
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
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
    let countcharacter = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] !==' ') {
        countcharacter = countcharacter + 1;
      }
    }
    return countcharacter;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
