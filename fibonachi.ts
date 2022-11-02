function fibonachiNum(n: number): number {
  const n1: number = 0;
  const n2: number = 1;
  let sum:number;
  if(n == 1) {
    sum = n1;
  }
  else if( n == 2) {
    sum = n1 + n2;
  } else {
      sum = fibonachiNum(n - 2) + fibonachiNum(n - 1);
    }
  return sum;
}

console.log(fibonachiNum(8));
