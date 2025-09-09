abstract class Equipo2 {
  constructor(
    protected tipo: string,
    protected nombre: string,
    protected ram: string,
    protected procesador: string
  ) {}

  abstract detalles(): string;
}

export class Notebook extends Equipo2 {
  constructor(nombre: string, ram: string, procesador: string) {
    super("Notebook", nombre, ram, procesador);
  }

  detalles(): string {
    return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

export class Desktop extends Equipo2 {
  constructor(nombre: string, ram: string, procesador: string) {
    super("Desktop", nombre, ram, procesador);
  }

  detalles(): string {
    return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

export class Servidor extends Equipo2 {
  constructor(nombre: string, ram: string, procesador: string) {
    super("Servidor", nombre, ram, procesador);
  }

  detalles(): string {
    return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}


export class EquipoFactory {
  crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): Equipo2 {
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
