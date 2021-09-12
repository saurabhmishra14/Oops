class Person {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    public get age() {
        return this._age;
    }

    public set age(Age: number) {
        if (Age <= 0 ||Age >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = Age;
    }

    public get firstName() {
        return this._firstName;
    }

    public set firstName(theFirstName: string) {
        if (!theFirstName) {
            throw new Error('Invalid first name.');
        }
        this._firstName = theFirstName;
    }

    public get lastName() {
        return this._lastName;
    }

    public set lastName(theLastName: string) {
        if (!theLastName) {
            throw new Error('Invalid last name.');
        }
        this._lastName = theLastName;
    }

    public getFullName(): string {
        return ((this.firstName)+ (this.lastName));
    }
}
const  p1=new Person();
p1.age=22;
p1.firstName="Saurabh";
p1.lastName="Mishra";
console.log(p1.age);

