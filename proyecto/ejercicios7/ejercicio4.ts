abstract class FiguraGeometrica {
  constructor(public nombre: string) {}

  abstract area(): number;
}

class Triangulo extends FiguraGeometrica {
  constructor(public base: number, public altura: number) {
    super('Triángulo');
  }

  area(): number {
    return (this.base * this.altura) / 2;
  }
}

class Círculo extends FiguraGeometrica {
  constructor(public radio: number) {
    super('Círculo');
  }

  area(): number {
    return Math.PI * this.radio ** 2;
  }
}

class Cuadrado extends FiguraGeometrica {
  constructor(public lado: number) {
    super('Cuadrado');
  }

  area(): number {
    return this.lado ** 2;
  }
}

const triangulo = new Triangulo(4, 6);
const circulo = new Círculo(5);
const cuadrado = new Cuadrado(4);

console.log(`Área del ${triangulo.nombre}: ${triangulo.area()}`);
console.log(`Área del ${circulo.nombre}: ${circulo.area()}`);
console.log(`Área del ${cuadrado.nombre}: ${cuadrado.area()}`);
