let readlineSync=require("readline-sync");
let numero = readlineSync.question("Dime un número  ")

if(numero>10) {
    console.log("El número es mayor que 10.");
} else if(numero<10) {
    console.log("El número es menor que 10.");
} else {
    console.log("El número es igual a 10.");
}

