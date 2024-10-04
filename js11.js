let readlineSync=require("readline-sync");
let texto = readlineSync.question("Introduce una frase o palabra  ")

let contadorVocales = 0;

// Convertir la cadena a minúsculas para simplificar la verificación
const textoMinuscula = texto.toLowerCase();

// Recorrer cada carácter de la cadena
for (let i = 0; i < textoMinuscula.length; i++) {
    // Verificar si el carácter es una vocal
    if ("aeiou".includes(textoMinuscula[i])) {
        contadorVocales++; 
    }
}

console.log(`El número de vocales en la cadena es: ${contadorVocales}`);