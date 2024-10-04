let readlineSync = require("readline-sync");
let cadena = readlineSync.question("Introduce una frase o palabra: ");

// Invertir la cadena
let cadenaInvertida = cadena.split('').reverse().join('');

// Resultado
console.log(`La cadena invertida es: ${cadenaInvertida}`);