
const editable = function (tf: boolean) {
  return function (target: any, propName: string, description: PropertyDescriptor) {
    description.writable = tf
  }
}

class Cafes {
  constructor(private _name: string) {}

  @editable(true)
  hello () {
    console.log(`안녕하세요. 카페 ${this._name}입니다.`)
  }
}

const cafe = new Cafes('한켠')
cafe.hello()
