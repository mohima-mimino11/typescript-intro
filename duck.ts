interface Flyable {
  fly(): void;
}

class Bird implements Flyable {
  fly(): void {
     console.log("Bird is flying");
  }
}

class Plane implements Flyable {
  fly(): void {
     console.log("Plane is flying");
  }
}

function goFly(flyable: Flyable) {
  flyable.fly();
}

let bird = new Bird();
let plane = new Plane();

goFly(bird); // Prints "Bird is flying"
goFly(plane); // Prints "Plane is flying"