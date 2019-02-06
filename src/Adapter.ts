namespace AdapterPattern {
  export class Adaptee {
    public methods(): void {
      console.log("`method` of Adaptee is being called");
    }
  }
  export class Target {
    call(): void {}
  }
  export class Adapter implements Target {
    call (): void {
      console.log("Adapter's `call` method is being called");
      const adaptee: Adaptee = new Adaptee()
      adaptee.methods()
    }
  }
}
