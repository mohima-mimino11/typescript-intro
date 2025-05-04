function add(a: any, b: any){
  if(typeof a === 'number' && typeof b === 'number'){
    return a + b;
  }
  if(typeof a === 'string' && typeof b === 'string'){
    return a.concat(b);
  }
  throw new Error('Parameters must be numbers or strings');
}

console.log(add(4, 9));
console.log(add('jello', 'hello'));
// console.log(add(true, false));
function add2(a: number | string, b: number | string){
  if(typeof a === 'number' && typeof b === 'number'){
    return a + b;
  }
  if(typeof a === 'string' && typeof b === 'string'){
    return a.concat(b);
  }
  throw new Error('Parameters must be numbers or strings');
}
console.log(add2(4, 12));
console.log(add2('jello2', 'hello2'));
// console.log(add2(4, 'hello2'));
