// 6. Clase Hotel y Habitación
class Habitacion {
  constructor(public numero: number, public precio: number, public estado: string) {}

  reservar() {
    if (this.estado === 'disponible') {
      this.estado = 'reservada';
      console.log(`Habitación ${this.numero} ha sido reservada.`);
    } else {
      console.log(`Habitación ${this.numero} no está disponible para reservar.`);
    }
  }

  liberar() {
    if (this.estado === 'reservada') {
      this.estado = 'disponible';
      console.log(`Habitación ${this.numero} ha sido liberada.`);
    } else {
      console.log(`Habitación ${this.numero} no está reservada.`);
    }
  }
}

class Hotel {
  constructor(public nombre: string, public ubicacion: string) {}
}

const habitacion1 = new Habitacion(101, 100, 'disponible');
const habitacion2 = new Habitacion(102, 120, 'disponible');

console.log(`Hotel Habitaciones - ${habitacion1.numero}: ${habitacion1.estado}, ${habitacion2.numero}: ${habitacion2.estado}`);

habitacion1.reservar();
habitacion2.liberar();
