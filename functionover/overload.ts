/* function addNumbers(a: number, b: number): number {
    return a + b;
}

function addNumbers(a: string, b: string): string {
    return a + b;
}
 *///this will give error
  function add(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;

    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
}
console.log(add(5,6));
console.log(add('Saurabh ','Mishra')); //function overloading with help of union
 function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}
console.log(sum(5,6,11)); //function overloading with help of Optional paramter
function Sum(a: number, b: number): number;
function Sum(a: number, b: number, c: number): number;
function Sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}
console.log(Sum(5,6,11));  
class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
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
//console.log(counter.count(20)); // return an array
 //funciton overloading in the class