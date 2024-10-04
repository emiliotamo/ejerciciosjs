
let readlineSync=require("readline-sync");
let numero = readlineSync.question("Introduce un numero para la tabla de multipilicar  ")

for (let i=1; i <= 10; i++) {
    console.log(`${numero} * ${i} = ${numero * i}`);
}