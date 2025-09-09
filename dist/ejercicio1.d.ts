export interface Equipo1 {
    nombre: string;
    tipo: string;
    estado: string;
}
export declare class Inventario {
    private static instancia;
    private equipos;
    constructor();
    static obtenerInstancia(): Inventario;
    agregarEquipo(nombre: string, tipo: string, estado: string): void;
    listarEquipos(): Equipo1[];
}
//# sourceMappingURL=ejercicio1.d.ts.map