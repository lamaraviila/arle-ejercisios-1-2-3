class Cita {
  constructor(
    public paciente: string,
    public doctor: string,
    public fecha: string,
    public hora: string,
    public motivo: string
  ) {}
}

class AgendaCitas {
  citas: Cita[] = [];

  agregarCita(cita: Cita) {
    this.citas.push(cita);
  }

  eliminarCita(cita: Cita) {
    const index = this.citas.indexOf(cita);
    if (index !== -1) {
      this.citas.splice(index, 1);
    }
  }

  buscarCita(doctor: string): Cita[] {
    return this.citas.filter((cita) => cita.doctor === doctor);
  }

  citasHoy(): Cita[] {
    const today = new Date().toLocaleDateString();
    return this.citas.filter((cita) => cita.fecha === today);
  }

  citasFecha(fecha: string): Cita[] {
    return this.citas.filter((cita) => cita.fecha === fecha);
  }
}

// Ejemplo de uso
const agenda = new AgendaCitas();
agenda.agregarCita(
  new Cita('Paciente1', 'Doctor1', '2023-10-27', '10:00 AM', 'Examen de rutina')
);
agenda.agregarCita(
  new Cita('Paciente2', 'Doctor2', '2023-10-27', '11:30 AM', 'Consulta médica')
);
const doctor2Citas = agenda.buscarCita('Doctor2');
console.log('Citas del Doctor2:', doctor2Citas);

//..Clase Producto y CajaRegistradora:
class Producto {
  constructor(public nombre: string, public precio: number) {}
}

class CajaRegistradora {
  products: Producto[] = [];
  total: number = 0;

  cobrar(producto: Producto) {
    this.products.push(producto);
    this.total += producto.precio;
  }

  imprimirTicket() {
    console.log('Productos comprados:');
    this.products.forEach((producto) => {
      console.log(`${producto.nombre}: $${producto.precio}`);
    });
    console.log(`Total a pagar: $${this.total}`);
  }
}

// Ejemplo de uso
const caja = new CajaRegistradora();
const producto1 = new Producto('Producto1', 10);
const producto2 = new Producto('Producto2', 20);
caja.cobrar(producto1);
caja.cobrar(producto2);
caja.imprimirTicket();
 
//....Clase Apartamento, Propietario y Edificio:

class Propietario {
  constructor(public nombre: string, public email: string) {}
}

class Apartamento {
  propietarios: Propietario[] = [];

  constructor(
    public numero: number,
    public habitaciones: number,
    public metros: number
  ) {}

  agregarPropietario(propietario: Propietario) {
    this.propietarios.push(propietario);
  }
}

class Edificio {
  apartamentos: Apartamento[] = [];

  constructor(public direccion: string) {}

  agregarApartamento(apartamento: Apartamento) {
    this.apartamentos.push(apartamento);
  }

  eliminarApartamento(numero: number) {
    const index = this.apartamentos.findIndex(
      (apartamento) => apartamento.numero === numero
    );
    if (index !== -1) {
      this.apartamentos.splice(index, 1);
    }
  }

  buscarApartamento(numero: number): Apartamento | undefined {
    return this.apartamentos.find(
      (apartamento) => apartamento.numero === numero
    );
  }

  cobrarRenta() {
    this.apartamentos.forEach((apartamento) => {
      // Implementa aquí la lógica para cobrar la renta de cada inquilino.
    });
  }
}

// Ejemplo de uso
const edificio = new Edificio('123 Main St');
const apartamento1 = new Apartamento(101, 2, 80);
const propietario1 = new Propietario('Propietario1', 'propietario1@email.com');
apartamento1.agregarPropietario(propietario1);
edificio.agregarApartamento(apartamento1);

console.log('Apartamento 101:', edificio.buscarApartamento(101));

//