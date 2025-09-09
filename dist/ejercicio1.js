export class Inventario {
    constructor() {
        this.equipos = [];
    }
    static obtenerInstancia() {
        if (!Inventario.instancia) {
            Inventario.instancia = new Inventario();
        }
        return Inventario.instancia;
    }
    agregarEquipo(nombre, tipo, estado) {
        const nuevoEquipo = { nombre, tipo, estado };
        this.equipos.push(nuevoEquipo);
    }
    listarEquipos() {
        return this.equipos;
    }
}
//# sourceMappingURL=ejercicio1.js.map