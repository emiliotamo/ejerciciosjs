class Circulo {
    constructor(radio) {
        this.radio = radio;
    }

    // Método para calcular el área
    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

// Instanciando la clase
const miCirculo = new Circulo(5); // Radio de 5 unidades
const area = miCirculo.calcularArea();

// Mostrando el área en la consola
console.log(`El área del círculo es: ${area.toFixed(2)} unidades cuadradas.`);