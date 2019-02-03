function wriatable (canbeWritable: boolean): any {
  return function (target: any, propName: string) {
    return {
      writable: canbeWritable
    }
  }
}

class Faidj {
  @wriatable(false)
  name: string = 'Mark'

  constructor () {}
}

const faidj = new Faidj()
faidj.name = 'it will be made some error'
