function add(a: number, b: number): number {
  return a + b;
}
let sum = add(10,20);
console.log(sum);
function echo(message: string): void {
  console.log(message.toUpperCase());
}
echo('mirrorball')

let add5 : (a: number, b:number) => number = function(x: number, y: number){
  return x + y;
};
console.log(add5(9,4));
function multiply(a: number, b: number, c?: number): number {

  if (typeof c !== 'undefined') {
      return a * b * c;
  }
  return a * b;
}
console.log(multiply(6,2));
console.log(multiply(6,2,5));

