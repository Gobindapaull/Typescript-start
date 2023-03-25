// Base Class
class Animal {
    makeSound() {
        console.log('animal sound');
    }
}

class Dog extends Animal {
    makeSound() {
        console.log('Bark');
    }
}

class Cat extends Animal {
    makeSound() {
        console.log('Meow');
    }
}

function makeAnimalSound(animal: Animal) {
    animal.makeSound();
}

let animal1 = new Animal();
let animal2 = new Dog();

makeAnimalSound(animal1);
makeAnimalSound(animal2);
