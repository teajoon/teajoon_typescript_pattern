interface IPerson {
  name: string;
  speakName(): void
}

interface IAsian extends IPerson {
  country: string
}

class Korean implements IAsian {
  name: string = ''
  country: string =  ''
  constructor(name: string, country: string) {}
  speakName() {
    alert(this.name + ' ' + this.country)
  }
}

const john: IPerson = new Korean('존', '한국')
