
    let readlineSync=require("readline-sync");
    let numero1 = readlineSync.question("Introduce el primer número  ")
    let numero2 = readlineSync.question("Introduce el segundo número  ")
    
    let operador = readlineSync.question("Introduce el operador (+, -, *, /):")
    
    
    
    

    let resultado;

  
    switch (operador) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                console.log("Error: División por cero.");
                return; // Salir de la función en caso de error
            }
            break;
        default:
            console.log("Error: Operador no válido.");
            return; // Salir de la función en caso de error
    }

    // Mostrar el resultado en la consola
    console.log(`El resultado de ${numero1} ${operador} ${numero2} es: ${resultado}`);
