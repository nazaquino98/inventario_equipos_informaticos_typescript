export class InventarioViejo {
    constructor() {
        this.items = [];
    }
    agregarItem(nombre, tipo, estado) {
        this.items.push({ nombre, tipo, estado });
    }
    obtenerItems() {
        return this.items;
    }
}
export class AdaptadorInventario {
    constructor(inventarioViejo) {
        this.inventarioViejo = inventarioViejo;
    }
    agregarEquipo(nombre, tipo, estado) {
        this.inventarioViejo.agregarItem(nombre, tipo, estado);
    }
    listarEquipos() {
        return this.inventarioViejo.obtenerItems();
    }
}
//# sourceMappingURL=ejercicio4.js.map