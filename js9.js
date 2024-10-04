let readlineSync=require("readline-sync");
let numero = readlineSync.question("Dime un número  ")


let factorial = 1;
let i = 1;

// Calcular el factorial 
while (i <= numero) {
    factorial *= i; // multiplicar factorial por el valor de i
    i++; // incrementar el contador
}

console.log(`El factorial de ${numero} es: ${factorial}`);