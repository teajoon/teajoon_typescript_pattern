
function print() {
  return function (target: any, methodName: string, paramIndex: number) {
    console.log(target)
    console.log(methodName)
    console.log(paramIndex)
  }
}

class Aijoviaen {
  constructor(@print() private _name: string, private _age: number) {}
  hello (@print() lang: string) {
    if (lang === 'en') {
      alert('hello')
    } else if (lang === 'ko') {
      alert('안녕하세요')
    }
  }
}

const aijoviaen = new Aijoviaen('Mark', 35)
aijoviaen.hello('en')
