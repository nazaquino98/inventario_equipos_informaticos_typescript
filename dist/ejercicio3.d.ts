export interface Observador {
    notificar(equipo: Equipo, nuevoEstado: string): void;
}
export declare class Soporte implements Observador {
    notificar(equipo: Equipo, nuevoEstado: string): void;
}
export declare class Equipo {
    private nombre;
    private tipo;
    private estado;
    private observadores;
    constructor(nombre: string, tipo: string, estado: string);
    getNombre(): string;
    getTipo(): string;
    getEstado(): string;
    agregarObservador(observador: Observador): void;
    cambiarEstado(nuevoEstado: string): void;
    private notificarObservadores;
}
//# sourceMappingURL=ejercicio3.d.ts.map