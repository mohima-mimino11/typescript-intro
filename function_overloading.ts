function adding(a:number, b: number) : number;
function adding(a:string, b: string) : string;
function adding(a:any, b:any):any{
  if(typeof a === 'number' && typeof b === 'number'){
    return a + b;
  }else if(typeof a === 'string' && typeof b === 'string'){
    return a + b;
  }
  throw new Error('Invalid Arguments');
}

console.log(adding(10, 20));
console.log(adding('Mika', 'sa'));

function sum(a:number, b: number) : number;
function sum(a:number, b:number, c:number) : number;
function sum(a:number, b:number, c?: number): number{
  if (c) return a + b + c;
  return a + b;
}
console.log(sum(12, 12));
console.log(sum(12, 12, 23));

