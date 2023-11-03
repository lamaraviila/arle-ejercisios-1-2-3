// 5. Clase Electrodoméstico con subclases
class Electrodomestico {
  constructor(public precio: number, public color: string) {}
}

class Televisor extends Electrodomestico {
  constructor(precio: number, color: string, public pulgadas: number) {
    super(precio, color);
  }
}

class Nevera extends Electrodomestico {
  constructor(precio: number, color: string, public capacidad: number) {
    super(precio, color);
  }
}

class Lavadora extends Electrodomestico {
  constructor(precio: number, color: string, public carga: number) {
    super(precio, color);
  }
}

const televisor = new Televisor(500, 'negro', 55);
const nevera = new Nevera(700, 'blanco', 400);
const lavadora = new Lavadora(400, 'gris', 8);

console.log(`Televisor - Precio: $${televisor.precio}, Color: ${televisor.color}, Pulgadas: ${televisor.pulgadas}`);
console.log(`Nevera - Precio: $${nevera.precio}, Color: ${nevera.color}, Capacidad: ${nevera.capacidad} litros`);
console.log(`Lavadora - Precio: $${lavadora.precio}, Color: ${lavadora.color}, Carga: ${lavadora.carga} kg`);