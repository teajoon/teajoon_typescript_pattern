namespace ObserverPattern {
  export class Subject {
    private observers: Observer[] = [];

    public register(observer: Observer) {
      this.observers.push(observer)
    }

    public unregister(observer: Observer) {
      const n: number = this.observers.indexOf(observer)
      if (n > -1) {
        this.observers.splice(n, 1);
      }
    }

    public notify () {
      const observers: Observer[] = this.observers
      for (let i: number = 0 ; i < observers.length; i += 1) {
        observers[i].notify()
      }
    }
  }

  export class ConcreteSubject extends Subject {
    private subjectState: number = 0;

    get SubjectState(): number {
      return this.subjectState
    }

    set SubjectState(subjectState: number) {
      this.subjectState = subjectState
    }
  }

  export class Observer {
    public notify(): void {
      throw new Error('Abstract Method!')
    }
  }

  export class ConcreteObserver extends Observer {
    private name: string;
    private state: number;
    private subject: ConcreteSubject;

    constructor(name: string, subject: ConcreteSubject) {
      super()
      this.name = name
      this.subject = subject
    }

    public notify(): void {
      this.state = this.subject.SubjectState
    }

    get Subject(): ConcreteSubject {
      return this.subject
    }

    set Subject(subject: ConcreteSubject) {
      this.subject = subject
    }
  }
}

export function demo (): void {
  const sub: ObserverPattern.ConcreteSubject = new ObserverPattern.ConcreteSubject

  sub.register(new ObserverPattern.ConcreteObserver('Janny', sub))
  sub.register(new ObserverPattern.ConcreteObserver('Julcsa', sub))
  sub.register(new ObserverPattern.ConcreteObserver('Marcsa', sub))

  sub.SubjectState = 123
  sub.notify()
}
