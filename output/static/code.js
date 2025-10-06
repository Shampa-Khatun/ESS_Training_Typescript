//static properties and methods
class Employee {
    firstName;
    lastName;
    jobTitle;
    static headcount = 0;
    constructor(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        Employee.headcount++;
    }
    static getHeadcount() {
        return Employee.headcount;
    }
}
let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');
console.log(Employee.getHeadcount()); // 2
export {};
//# sourceMappingURL=code.js.map