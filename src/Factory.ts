interface ISuper {
  attacked: Function
  heal: Function
  rampage?: Function
}

class Hero implements ISuper {
  private _name: string
  private _health: number
  private _maxHealth: number = 100
  constructor(_name: string, _health: number = 100) {
    this._name = _name
    if (_health < this._maxHealth) {
      this._health = _health
    } else {
      this._health = this._maxHealth
    }
  }

  attacked (attackValue) {
    if (attackValue > this._health) {
      console.log(`${this._name} is no more.`);
    } else {
      this._health -= attackValue;
      console.log(`Hero attacked: ${attackValue} -- ${this._health}`);
    }
  }

  heal(healValue) {
    if (this._health + healValue > this._maxHealth) {
      console.log(`${this._name} has max health of ${this._maxHealth}`);
    } else {
      this._health += healValue;
      console.log(`${this._name} healed to ${this._health}`);
    }
  }
}

class Villain {
  private _name: string
  private _health: number
  private _maxHealth: number = 100
  constructor(_name: string, _health: number = 100) {
    this._name = _name
    if (_health < this._maxHealth) {
      this._health = _health
    } else {
      this._health = this._maxHealth
    }
  }

  rampage() {
    if (this._health <= 10) {
      this._health = this._maxHealth * 0.90
      console.log(`${this._name} restored health to ${this._health}`);
    } else {
      console.log(`${this._name} is not weak enough`);
    }
  }

  attacked (attackValue) {
    if (attackValue > this._health) {
      console.log(`${this._name} is no more.`);
    } else {
      this._health -= attackValue;
      console.log(`Villain attacked: ${attackValue} -- ${this._health}`);
    }
  }

  heal(healValue) {
    if (this._health + healValue > this._maxHealth) {
      console.log(`${this._name} has max health of ${this._maxHealth}`);
    } else {
      this._health += healValue;
      console.log(`${this._name} healed to ${this._health}`);
    }
  }
}

export class SuperHeroFactory {
  public createSuperHero(heroOptions): Hero | Villain {
    if (heroOptions.type === "hero") {
      const hero = new Hero(heroOptions.name, heroOptions.health);
      return hero;
    } else if (heroOptions.type === "villain") {
      const villain = new Villain(heroOptions.name, heroOptions.health);
      return villain;
    } else {
      throw new Error('Select either a Hero or a Villain');
    }
  }
}

const superheroFactory = new SuperHeroFactory();
const batman: ISuper = superheroFactory.createSuperHero({name: 'Batman', type: "hero"});
const joker: ISuper = superheroFactory.createSuperHero({name: 'Joker', health: 50, type: "villain"});

batman.attacked(40); // Hero attacked: 40 -- 60
joker.attacked(40); // Villain attacked: 40 -- 10
joker.rampage(); // Joker restored health to 90
