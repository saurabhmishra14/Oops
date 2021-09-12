class Department {
  // private readonly id: string;
  // private name: string;
  protected Employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.Employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.Employees.length);
    console.log(this.Employees);
  }
}
class ItDept extends Department {
  Admin: string[];
  constructor(id: string, Admins: string[]) {
    super(id, 'IT');
    this.Admin = Admins;
  }
  addEmployee(employee: string) {
    this.Employees.push(employee);
  }
  printadmins() {
    console.log(this.Admin);
  }
}
class Finance extends Department {

  constructor(id: string, private report: string[]) {
    super(id, 'Finance');
  }
  getReport(text: string) {
    this.report.push(text);
  }
  addEmployee(employee: string) {
    this.Employees.push(employee);
  }

  printReport() {
    console.log(this.report);
    console.log(this.Employees);
  }
}
const accounting = new Department('d1', 'Accounting');
const itdept = new ItDept('d2', ['A', 'B', 'C']);
const finan = new Finance('d3', []);
finan.addEmployee('Saurabh');
finan.getReport('This is Secret shh');
finan.printReport();

/* console.log(finan.printreport());
console.log(itdept.printadmins());
console.log(itdept.name);
 */