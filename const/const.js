var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    return Department;
}());
var obj1 = new Department("Electrical");
console.log(obj1.describe());
var obj2 = { name: 'Mech', describe: obj1.describe };
console.log(obj2.describe());
