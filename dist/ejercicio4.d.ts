export declare class InventarioViejo {
    private items;
    agregarItem(nombre: string, tipo: string, estado: string): void;
    obtenerItems(): {
        nombre: string;
        tipo: string;
        estado: string;
    }[];
}
export declare class AdaptadorInventario {
    private inventarioViejo;
    constructor(inventarioViejo: InventarioViejo);
    agregarEquipo(nombre: string, tipo: string, estado: string): void;
    listarEquipos(): {
        nombre: string;
        tipo: string;
        estado: string;
    }[];
}
//# sourceMappingURL=ejercicio4.d.ts.map