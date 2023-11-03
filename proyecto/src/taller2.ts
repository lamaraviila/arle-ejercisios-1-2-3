interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}

function printUserData(user: User | Admin): void {
  console.log(`Nombre: ${user.name}, Edad: ${user.age}`);
  if ('role' in user) {
    console.log(`Rol: ${user.role}`);
  }
}

const regularUser: User = { name: 'Juan', age: 30 };
const adminUser: Admin = { name: 'Admin', age: 35, role: 'Administrador' };

printUserData(regularUser);
printUserData(adminUser);
