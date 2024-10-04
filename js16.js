let readlineSync = require("readline-sync");

// Pedir tres números al usuario
let numero1 = readlineSync.questionInt("Introduce el primer número: ");
let numero2 = readlineSync.questionInt("Introduce el segundo número: ");
let numero3 = readlineSync.questionInt("Introduce el tercer número: ");

// Determinar el mayor
let mayor;

if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2;
} else {
    mayor = numero3;
}

// Resultado
console.log(`El número mayor es: ${mayor}`);