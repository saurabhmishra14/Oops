/* class MyClass
{   private value : string;
    constructor(value : string)
    {
        this.value = value;
    }
    
    constructor(value : number)
    {
        this.value = value.toString();
    }

    private value : string;
} */ //this will give error
/* class MyClass
{
    constructor(value : string | number)
    {
        this.value = value.toString();
    }

    private value : string;
}
const obj1=new MyClass("Saurabh"); */ //Constructor overloading can be done with help of union
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.fromSingleValue = function (value) {
        var result = new MyClass();
        result.value = value;
        return result;
    };
    MyClass.fromTwoValues = function (first, second) {
        var result = new MyClass();
        result.value = first + second;
        return result;
    };
    return MyClass;
}());
console.log(MyClass.fromSingleValue("Saurabh"));
console.log(MyClass.fromTwoValues("Saurabh", "Mishra"));
