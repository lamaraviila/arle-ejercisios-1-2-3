interface BaseObject {
  id: number;
}

interface User extends BaseObject {
  name: string;
  age: number;
}

interface Product extends BaseObject {
  name: string;
  price: number;
}

interface Order extends BaseObject {
  orderDate: Date;
}

function printData<T extends BaseObject>(item: T): void {
  console.log(`ID: ${item.id}`);
}

const user: User = { id: 1, name: 'Juan', age: 30 };
const product: Product = { id: 2, name: 'Producto A', price: 10 };
const order: Order = { id: 3, orderDate: new Date() };

printData(user);
printData(product);
printData(order);
