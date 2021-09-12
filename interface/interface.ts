interface IPerson {//you cant use union and store value in the interface so Kind of Data Abstraction is implement here
    name: string,
    age: number,
    Greet(): void;
}
class Employee implements IPerson {  //we can add more inheritance like person,dept,.. but in inheritance it cant be possible
    name: string;
    age: number;

    constructor(n: string, age: number) {
        this.name = n;
        this.age = 22;
    }

    Greet() {
        console.log("HELLO" + this.name + "!");
    }
}
let ep1 = new Employee('Deepak', 10);

/* let p1:person;
p1={
    name:"Saurabh",
    age:22,
    greet(){
        console.log("Hello");
    },


} */