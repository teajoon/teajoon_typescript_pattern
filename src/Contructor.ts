class Per{
  constructor(protected _name: string, private _age: number) {}
}


class Japanese extends Per {
  constructor() {
    super('Japanese', 35)
  }
  hello(): void {
    alert(`곤니치와 ${this._name}`)
  }
}


const japanese = new Japanese()
japanese.hello()
