class Counter{
  private current = 0;
  count(): number;
  count(target: number): number[];
  count(target?: number) : number | number[]{
    if(target){
      let values: number[] = [];
      for(let start = this.current; start <= target; start++){
        values.push(start);
      }
      this.current = target;
      return values;
    }
    return ++this.current;
  }
}

let counter = new Counter();
console.log(counter.count()); // return a number
console.log(counter.count(5)); // return an array