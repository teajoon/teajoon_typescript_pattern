interface IPerson {
  name: string;
  speakName(): void
}

class Asian implements IPerson {
  constructor(public name: string) {}
  speakName() {
    if (this.name !== '') {
      alert(this.name)
    }
  }
}

const teajoon: IPerson = new Asian('teajoon')
teajoon.speakName()
