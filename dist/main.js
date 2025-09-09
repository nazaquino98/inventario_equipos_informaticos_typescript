import { Inventario } from "./ejercicio1.js";
import { EquipoFactory } from "./ejercicio2.js";
import { Equipo, Soporte } from "./ejercicio3.js";
import { InventarioViejo, AdaptadorInventario } from "./ejercicio4.js";
// Ejercicio 1: Singleton
const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
inventario.agregarEquipo("Desktop Dell", "Desktop", "disponible");
console.log("Inventario Singleton:");
console.log(inventario.listarEquipos());
console.log("--------------------------------------------------");
// Ejercicio 2: Factory
const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", "MacBook Pro", "16GB", "M2");
const desktop = factory.crearEquipo("Desktop", "HP Pavilion", "8GB", "Ryzen 5");
console.log("Equipos creados con Factory:");
console.log(notebook.detalles());
console.log(desktop.detalles());
console.log("--------------------------------------------------");
// Ejercicio 3: Observer
const soporte = new Soporte();
const equipoObs = new Equipo("Servidor IBM", "Servidor", "disponible");
equipoObs.agregarObservador(soporte);
equipoObs.cambiarEstado("en reparación"); // Esto debe notificar al soporte
console.log("--------------------------------------------------");
// Ejercicio 4: Adaptador
const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
adaptador.agregarEquipo("Notebook Lenovo", "Notebook", "en reparación");
console.log("Inventario adaptado:");
console.log(adaptador.listarEquipos());
//# sourceMappingURL=main.js.map