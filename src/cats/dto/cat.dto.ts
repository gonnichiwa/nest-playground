export class Cat {
  constructor(name: string, age: number, breed: string) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
  name: string;
  age: number;
  breed: string;
}

export class ListAllEntities {
  constructor(limit) {
    this.limit = limit;
  }
  limit: number;
}
