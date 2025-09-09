class Equipo2 {
    constructor(tipo, nombre, ram, procesador) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }
}
export class Notebook extends Equipo2 {
    constructor(nombre, ram, procesador) {
        super("Notebook", nombre, ram, procesador);
    }
    detalles() {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}
export class Desktop extends Equipo2 {
    constructor(nombre, ram, procesador) {
        super("Desktop", nombre, ram, procesador);
    }
    detalles() {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}
export class Servidor extends Equipo2 {
    constructor(nombre, ram, procesador) {
        super("Servidor", nombre, ram, procesador);
    }
    detalles() {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}
export class EquipoFactory {
    crearEquipo(tipo, nombre, ram, procesador) {
        switch (tipo) {
            case "Notebook":
                return new Notebook(nombre, ram, procesador);
            case "Desktop":
                return new Desktop(nombre, ram, procesador);
            case "Servidor":
                return new Servidor(nombre, ram, procesador);
            default:
                throw new Error(`Tipo de equipo no soportado: ${tipo}`);
        }
    }
}
//# sourceMappingURL=ejercicio2.js.map