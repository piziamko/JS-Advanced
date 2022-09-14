class Company {
    departments = {};
    departmentClass = class Department {
        employees = [];

        constructor(name) {
            this.name = name;
        }

        addEmployee(name, salary, position) {
            this.employees.push({name, salary, position});
        }

        getDepartmentInfo() {
            return `Average salary: ${this.getAverageSalary().toFixed(2)}\n` + this.employees
                .sort((a, b) => (b.salary - a.salary) || (a.name.localeCompare(b.name)))
                .map(worker => `${worker.name} ${worker.salary} ${worker.position}`)
                .join('\n');
        }

        getAverageSalary() {
            return this.employees.reduce((acc, employee) => acc + employee.salary, 0) / this.employees.length;
        }
    };


    addEmployee(name, salary, position, department) {
        if (salary < 0
            || arguments.length < 4
            || Array.from(arguments).some(x => x === '' || x === undefined || x === null)) {
            throw Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = new this.departmentClass(department);
        }
        
// Variant 2
        
        class Company {
    departments = {};

    addEmployee(name, salary, position, department) {
        if (salary < 0
            || arguments.length < 4
            || Array.from(arguments).some(x => x==='' || x=== undefined || x===null)) {
            throw Error('Invalid input!');
        }

        const worker = {name, salary, position};

        if (!this.departments[department]) {
            this.departments[department] = {averageSalary: 0, workers: []};
        }

        const averageSalary = this.departments[department].averageSalary;
        const workersNumber = this.departments[department].workers.length;
        const totalSalary = averageSalary * workersNumber + salary;
        const newAverageSalary = totalSalary / (workersNumber + 1);
        this.departments[department].workers.push(worker);
        this.departments[department].averageSalary = newAverageSalary;
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        const [bestDepartmentName, bestDepartmentInfo] = Object.entries(this.departments)
            .sort((departA, departB) => departB[1].averageSalary - departA[1].averageSalary)[0];
        let result = `Best Department is: ${bestDepartmentName}\n`;
        result += `Average salary: ${bestDepartmentInfo.averageSalary.toFixed(2)}\n`;
        result += bestDepartmentInfo.workers
            .sort((a, b) => (b.salary - a.salary) || (a.name.localeCompare(b.name)))
            .map(worker => `${worker.name} ${worker.salary} ${worker.position}`)
            .join('\n');
        return result;
    }
}

        this.departments[department].addEmployee(name, salary, position);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        const bestDepartment = Object.values(this.departments)
            .sort((a, b) => b.getAverageSalary() - a.getAverageSalary())[0];
        let result = `Best Department is: ${bestDepartment.name}\n`;
        result += bestDepartment.getDepartmentInfo();
        return result;
    }
}
