interface Duck {
  quack(): void;
}
class MallardDuck implements Duck {
  quack(): void {
     console.log("Quack!");
  }
}
let duck1: Duck = new MallardDuck();
duck1.quack(); // Output: "Quack!"
class RubberDuck implements Duck {
  quack(): void {
     console.log("Squeak!");
  }
}
let duck: Duck = new RubberDuck();
duck.quack(); // Output: "Squeak!"