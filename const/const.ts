class Department{
    name:string;
    constructor(n:string){
        this.name=n;
    }
    describe(){
        console.log('Department: '+this.name);
    }
}
const obj1=new Department("Electrical");
console.log(obj1.describe());

const obj2={name:'Mech',describe:obj1.describe};
console.log(obj2.describe());
