interface IAnimal {
  getName(): string
  getCount(): number
  sound(): void
}

class Animal implements IAnimal {
  constructor(private _name: string, private _count: number) {}
  getName() {
    return this._name
  }
  getCount() {
    return this._count
  }
  sound() {}
}

class Lion extends Animal {
  constructor() {
    super('Lion', 100)
  }
  sound() {
    alert('Waoong!')
  }
}

const lion: IAnimal = new Lion()
lion.getName()
lion.getName()

