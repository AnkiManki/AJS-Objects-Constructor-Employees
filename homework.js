class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    whoAreYou() {
        return `My name is ${this.name} and I am working in ${this.department} department`;
    }
};

class Manager extends Employee {
    constructor(name) {
        super(name, 'General');
        this.employees = [];
    }
    addEmployee(employee) {
        if (employee) this.employees.push(employee);
    }
    fireEmployee(employee) {
        this.employees.splice(this.employees.indexOf(employee), 1);
    }
    getEmployees() {
        return this.employees;
    }
}

class SalesPerson extends Employee {
    constructor(name, quota) {
        super(name, 'Sales', quota);
        this.quota = quota;
    }
};

let michael = new Manager('Michael');
let pam = new Employee('Pam', 'Marketing');
let jim = new SalesPerson('Jim', '1000');
let dwight = new SalesPerson('Dwight', '1200');

michael.addEmployee(pam);
michael.addEmployee(jim);
michael.addEmployee(dwight);

console.log(michael.getEmployees());

michael.fireEmployee(pam);

console.log(michael.getEmployees());
