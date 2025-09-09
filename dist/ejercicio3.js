export class Soporte {
    notificar(equipo, nuevoEstado) {
        console.log(`Soporte notificado: [${equipo.getTipo()}] ${equipo.getNombre()} ha cambiado su estado a ${nuevoEstado}.`);
    }
}
export class Equipo {
    constructor(nombre, tipo, estado) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.estado = estado;
        this.observadores = [];
    }
    getNombre() {
        return this.nombre;
    }
    getTipo() {
        return this.tipo;
    }
    getEstado() {
        return this.estado;
    }
    agregarObservador(observador) {
        this.observadores.push(observador);
    }
    cambiarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }
    notificarObservadores() {
        this.observadores.forEach(observadores => observadores.notificar(this, this.estado));
    }
}
//# sourceMappingURL=ejercicio3.js.map