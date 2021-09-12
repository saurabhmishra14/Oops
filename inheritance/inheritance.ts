class Department {
  // private readonly id: string;
  // private name: string;
  private Employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  public describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  public addEmployee(employee: string) {
    this.Employees.push(employee);
  }

  public printEmployeeInformation() {
    console.log(this.Employees.length);
    console.log(this.Employees);
  }
  protected Names() {
    console.log('ABC');
  }
}
class ITDept extends Department {
  admin: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admin = admins;
  }
  public printAdmins() {
    console.log(this.admin);
  }
}
class Finance extends Department {

  constructor(id: string, private report: string[]) {
    super(id, 'Finance');
  }
  public getReport(text: string) {
    this.report.push(text);
  }

  public printReport() {
    console.log(this.report);
  }
}
const accounting = new Department('d1', 'Accounting');
const IT = new ITDept('d2', ['A', 'B', 'C']);
const finan = new Finance('d3', []);
finan.getReport('This is Secret shh');
finan.printReport();

console.log(finan.printReport());
console.log(IT.printAdmins());
console.log(IT.name);
  /* itdept.PrintEmployeeInformation();
accounting.AddEmployee('Saurabh');
accounting.AddEmployee('Deepak');
accounting.Describe();
accounting.name = 'newname';
accounting.PrintEmployeeInformation();
*/
