interface Person {
  name: string;
  [index: string]: string;
}

interface People {
  [index: number]: Person
}

const person: Person = {
  name: 'John'
}

person.anything = 'a'
const people: People = []
people[0] = person

function log (p: People) : void {
  const personTmp: Person = p[0]
  console.log(personTmp.anything)
}
