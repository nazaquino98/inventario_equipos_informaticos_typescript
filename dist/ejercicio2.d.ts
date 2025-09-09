declare abstract class Equipo2 {
    protected tipo: string;
    protected nombre: string;
    protected ram: string;
    protected procesador: string;
    constructor(tipo: string, nombre: string, ram: string, procesador: string);
    abstract detalles(): string;
}
export declare class Notebook extends Equipo2 {
    constructor(nombre: string, ram: string, procesador: string);
    detalles(): string;
}
export declare class Desktop extends Equipo2 {
    constructor(nombre: string, ram: string, procesador: string);
    detalles(): string;
}
export declare class Servidor extends Equipo2 {
    constructor(nombre: string, ram: string, procesador: string);
    detalles(): string;
}
export declare class EquipoFactory {
    crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): Equipo2;
}
export {};
//# sourceMappingURL=ejercicio2.d.ts.map