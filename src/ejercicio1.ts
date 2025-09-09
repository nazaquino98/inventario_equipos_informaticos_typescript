export interface Equipo1 {
    nombre: string;
    tipo: string;
    estado: string;
}

export class Inventario {
    private static instancia: Inventario;
    private equipos: Equipo1[] = [];

    constructor() { }

    public static obtenerInstancia(): Inventario {
        if (!Inventario.instancia) {
            Inventario.instancia = new Inventario();
        }
        return Inventario.instancia;
    }

    public agregarEquipo(nombre: string, tipo: string, estado: string): void {
        const nuevoEquipo: Equipo1 = { nombre, tipo, estado };
        this.equipos.push(nuevoEquipo);
    }

    public listarEquipos(): Equipo1[] {
        return this.equipos;
    }
}
