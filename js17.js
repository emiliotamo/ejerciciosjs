let readlineSync = require("readline-sync");

// Pedir un número al usuario
let numero = readlineSync.questionInt("Introduce un número: ");

// Verificar si el número es primo
let esPrimo = true; 

if (numero <= 1) {
    esPrimo = false; 
} else {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false; 
            break; 
        }
    }
}

// Resultado
if (esPrimo) {
    console.log(`${numero} es un número primo.`);
} else {
    console.log(`${numero} no es un número primo.`);
}