

   let readlineSync = require("readline-sync");
let frase = readlineSync.question("Introduce una frase o palabra: ");

// Separar la frase en palabras usando split() y filtrar los elementos vacíos
const palabras = frase.split(/\s+/).filter(palabra => palabra.length > 0);

const cantidadDePalabras = palabras.length;

// Resultado
console.log(`La frase tiene ${cantidadDePalabras} palabras.`);


