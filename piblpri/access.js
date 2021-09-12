var Department1 = /** @class */ (function () {
    function Department1(n, id) {
        this.id = id;
        this.studname = [];
        this.name = n;
        this.id = id;
    }
    Department1.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    Department1.prototype.studentname = function (name) {
        this.studname.push(name);
    };
    Department1.prototype.printname = function () {
        //this.id=3; this give err bcz id has readonly property
        this.name = "hh";
        console.log('Department: ' + this.name);
        console.log(this.studname);
        console.log(this.id);
    };
    return Department1;
}());
var obj3 = new Department1("Electrical", 1);
obj3.studentname('Abhishek');
obj3.studentname('Saurabh');
obj3.studentname('Rohit');
//obj3.studname[3]="deepak"; can't be accessed because member is private
console.log(obj3.printname());
