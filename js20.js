class Tarea {

  
    constructor(nombre) {
        this.nombre = nombre;
        this.completada = false; // Por defecto, la tarea no está completada
    }
}

class ListaDeTareas {
    
    constructor() {
        this.tareas = []; // Array para almacenar las tareas
    }

    // Método para agregar una tarea
    agregarTarea(nombre) {
        const nuevaTarea = new Tarea(nombre);
        this.tareas.push(nuevaTarea);
        console.log(`Tarea "${nombre}" agregada.`);
    }

    // Método para completar una tarea
    completarTarea(nombre) {
        const tarea = this.tareas.find(t => t.nombre === nombre);
        if (tarea) {
            tarea.completada = true;
            console.log(`Tarea "${nombre}" completada.`);
        } else {
            console.log(`Tarea "${nombre}" no encontrada.`);
        }
    }

    // Método para mostrar tareas pendientes
    mostrarTareasPendientes() {
        const tareasPendientes = this.tareas.filter(t => !t.completada);
        if (tareasPendientes.length === 0) {
            console.log("No hay tareas pendientes.");
        } else {
            console.log("Tareas pendientes:");
            tareasPendientes.forEach(t => console.log(`- ${t.nombre}`));
        }
    }

    // Método para mostrar tareas completadas
    mostrarTareasCompletadas() {
        const tareasCompletadas = this.tareas.filter(t => t.completada);
        if (tareasCompletadas.length === 0) {
            console.log("No hay tareas completadas.");
        } else {
            console.log("Tareas completadas:");
            tareasCompletadas.forEach(t => console.log(`- ${t.nombre}`));
        }
    }
}

const lista = new ListaDeTareas();
lista.agregarTarea("Estudiar JavaScript");
lista.agregarTarea("Hacer ejercicio");
lista.mostrarTareasPendientes();

lista.completarTarea("Estudiar JavaScript");
lista.mostrarTareasCompletadas();
lista.mostrarTareasPendientes();