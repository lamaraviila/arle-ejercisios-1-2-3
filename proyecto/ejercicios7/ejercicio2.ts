class CuentaBancaria {
  constructor(public numeroCuenta: string, public titular: string, public saldo: number) {}

  depositar(monto: number): void {
    this.saldo += monto;
  }

  retirar(monto: number): void {
    if (monto <= this.saldo) {
      this.saldo -= monto;
    } else {
      console.log('Saldo insuficiente para realizar la operación.');
    }
  }

  consultarSaldo(): number {
    return this.saldo;
  }
}

const cuenta1 = new CuentaBancaria('12345', 'Juan Pérez', 1000);
const cuenta2 = new CuentaBancaria('54321', 'María López', 2000);

cuenta1.depositar(500);
cuenta2.retirar(100);
console.log(`Saldo cuenta 1: ${cuenta1.consultarSaldo()}`);
console.log(`Saldo cuenta 2: ${cuenta2.consultarSaldo()}`);
