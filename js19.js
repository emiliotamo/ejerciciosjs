let readlineSync = require("readline-sync");

let nota = readlineSync.questionInt("Introduce la calificación de tu examen: ");

if (nota >= 60) {
    console.log("¡Aprobaste!");
} else {
    console.log("Has suspendido.");
}


