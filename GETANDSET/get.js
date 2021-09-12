var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (Age) {
            if (Age <= 0 || Age >= 200) {
                throw new Error('The age is invalid');
            }
            this._age = Age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (theFirstName) {
            if (!theFirstName) {
                throw new Error('Invalid first name.');
            }
            this._firstName = theFirstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (theLastName) {
            if (!theLastName) {
                throw new Error('Invalid last name.');
            }
            this._lastName = theLastName;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getFullName = function () {
        return ((this.firstName) + (this.lastName));
    };
    return Person;
}());
var p1 = new Person();
p1.age = 22;
p1.firstName = "Saurabh";
p1.lastName = "Mishra";
console.log(p1.age);
