let readlineSync=require("readline-sync");
let numero = readlineSync.question(" Dime un número  ")

if (numero %2===0) {
    console.log(` El  número es  par.`);
} else {
    console.log(` El número es impar.`);
}
