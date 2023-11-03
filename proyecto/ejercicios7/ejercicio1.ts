class Persona {
  constructor(public nombre: string, public edad: number, public documentoIdentidad: string) {}

  caminar(): void {
    console.log(`${this.nombre} está caminando.`);
  }

  hablar(): void {
    console.log(`${this.nombre} está hablando.`);
  }

  comer(): void {
    console.log(`${this.nombre} está comiendo.`);
  }
}

const persona1 = new Persona('Juan', 30, '12345678');
const persona2 = new Persona('María', 25, '98765432');

persona1.caminar();
persona2.hablar();
