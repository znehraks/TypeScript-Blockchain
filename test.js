class Car {
  constructor(name, size, cost) {
    this.name = name;
    this.size = size;
    this.cost = cost;
  }
}

const lamb = new Car("lamb", 55, 10000);

console.log(lamb.name, lamb.size, lamb.cost);
