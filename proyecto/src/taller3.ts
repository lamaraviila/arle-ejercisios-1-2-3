interface Product {
  name: string;
  price: number;
}

interface Inventory {
  products: Product[];
  addProduct(product: Product): void;
  findProductByName(name: string): Product | undefined;
}

class InventoryManager implements Inventory {
  products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  findProductByName(name: string): Product | undefined {
    return this.products.find((p) => p.name === name);
  }
}

const inventory = new InventoryManager();
inventory.addProduct({ name: 'Producto A', price: 10 });
inventory.addProduct({ name: 'Producto B', price: 20 });

console.log(inventory.findProductByName('Producto A'));
console.log(inventory.findProductByName('Producto C'));
