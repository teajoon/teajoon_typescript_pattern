interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}

function hello (pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim()
  }
  else {
    pet.fly()
  }
}
