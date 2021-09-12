class Department {
    name: string;
    private studname: string[] = [];

    constructor(name: string, private readonly id: number) {
        this.name = name;
        this.id = id;
    }
    describe() {

        console.log('Department: ' + this.name);
    }
    studentName(name: string) {
        this.studname.push(name);

    }
    printName() {
        //this.id=3; this give err bcz id has readonly property
        //this.name="hh"; this will not give error
        console.log('Department: ' + this.name);
        console.log(this.studname);
        console.log(this.id);
    }
}
const obj3 = new Department("Electrical", 1);

obj3.studentName('Abhishek');
obj3.studentName('Saurabh');
obj3.studentName('Rohit');
//obj3.studname[3]="deepak"; can't be accessed because member is private
console.log(obj3.printName());
