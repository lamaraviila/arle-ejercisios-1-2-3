class Vehiculo {
  constructor(public tipo: string) {}

  desplazarse(): void {
    console.log(`El ${this.tipo} se está desplazando.`);
  }
}

class Coche extends Vehiculo {}
class Barco extends Vehiculo {}
class Avión extends Vehiculo {}

const coche = new Coche('coche');
const barco = new Barco('barco');
const avion = new Avión('avión');

coche.desplazarse();
barco.desplazarse();
avion.desplazarse();
