var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        this.employees = [];
        this.id = id;
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var ItDept = /** @class */ (function (_super) {
    __extends(ItDept, _super);
    function ItDept(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admin = admins;
        return _this;
    }
    ItDept.prototype.printadmins = function () {
        console.log(this.admin);
    };
    return ItDept;
}(Department));
var Finance = /** @class */ (function (_super) {
    __extends(Finance, _super);
    function Finance(id, report) {
        var _this = _super.call(this, id, 'Finance') || this;
        _this.report = report;
        return _this;
    }
    Finance.prototype.getreport = function (text) {
        this.report.push(text);
    };
    Finance.prototype.printreport = function () {
        console.log(this.report);
    };
    return Finance;
}(Department));
var accounting = new Department('d1', 'Accounting');
var itdept = new ItDept('d2', ['A', 'B', 'C']);
var finan = new Finance('d3', []);
finan.getreport('This is Secret shh');
finan.printreport();
console.log(finan.printreport());
console.log(itdept.printadmins());
console.log(itdept.name);
/* itdept.printEmployeeInformation();
accounting.addEmployee('Saurabh');
accounting.addEmployee('Deepak');
 accounting.describe();
accounting.name = 'newname';
accounting.printEmployeeInformation();
 */
