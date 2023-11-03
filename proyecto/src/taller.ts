interface Vehicle {
  model: string;
  year: number;
  color: string;
}

interface Car extends Vehicle {
  numberOfDoors: number;
}

interface Motorcycle extends Vehicle {
  engineDisplacement: number;
}

class VehicleInfo implements Car, Motorcycle {
  constructor(
    public model: string,
    public year: number,
    public color: string,
    public numberOfDoors: number,
    public engineDisplacement: number
  ) {}
}

const carInfo = new VehicleInfo('Sedan', 2022, 'Rojo', 4, 2000);
const motorcycleInfo = new VehicleInfo('Sport', 2022, 'Negro', 0, 1000);

console.log(carInfo);
console.log(motorcycleInfo);
