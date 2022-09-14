// function solve() {
//    document.querySelector('#btnSend').addEventListener('click', onClick);
//    const input = document.querySelector('#inputs textarea');
//    const bestRestaurantParagraph = document.querySelector('#bestRestaurant p');
//    const workersParagraph = document.querySelector('#workers p');
//    function onClick() {
//       let array = JSON.parse(input.value);
//       let restaurants = {};
//       array.forEach(line => {
//          const tokens = line.split(' - ');
//          const name = tokens[0];
//          const workersArray = tokens[1].split(', ');
//          let workers = [];

//          for (const worker of workersArray) {
//             const workerTokens = worker.split(' ');
//             const salary = Number(workerTokens[1]);
//             workers.push({ name: workerTokens[0], salary })
//          }
//          if (restaurants[name]) {
//             workers = workers.concat(restaurants[name].workers);
//          }
//          workers.sort((a, b) => b.salary - a.salary);
//          const bestSalary = workers[0].salary;
//          const averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;
//          restaurants[name] = {
//             workers,
//             averageSalary,
//             bestSalary
//          }
//       });
//       let bestRestaurantSalary = 0;
//       let bestRestaurant = undefined;
//       for (const name in restaurants) {
//          if (restaurants[name].averageSalary > bestRestaurantSalary) {
//             bestRestaurant = {
//                name,
//                workers: restaurants[name].workers,
//                bestSalary: restaurants[name].bestSalary,
//                averageSalary: restaurants[name].averageSalary

//             }
//             bestRestaurantSalary = restaurants[name].averageSalary;
//          }
//       }

//       bestRestaurantParagraph.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`
//       let workersResult = [];
//       bestRestaurant.workers.forEach(worker => {
//          workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
//       });

//       workersParagraph.textContent = workersResult.join(' ');
//    }
// }

// Variant 2 

function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {

        function createEmployee(data) {
            let [name, salary] = data.split(' ');
            return {name, salary: Number(salary)};
        }

        function averageSalary() {
            let totalSalaries = this.employees.reduce((acc, emp) => acc + emp.salary, 0);
            return totalSalaries / this.employees.length;
        }

        function bestSalary() {
            return this.employees.reduce((max, current) => Math.max(max, current.salary), 0);
        }

        const restaurantsData = JSON.parse(document.querySelector('#inputs textarea').value);
        const restaurants = {};

        for (const data of restaurantsData) {
            let [name, employees] = data.split(' - ');
            if (!restaurants[name]) {
                restaurants[name] = {
                    name,
                    employees: [],
                    averageSalary,
                    bestSalary,
                };
            }
            employees = employees.split(', ').map(createEmployee);
            restaurants[name].employees = restaurants[name].employees.concat(employees);
        }

        const best = Object.values(restaurants).sort((a, b) => b.averageSalary() - a.averageSalary())[0];

        document.querySelector('#bestRestaurant p').textContent =
            `Name: ${best.name} Average Salary: ${best.averageSalary().toFixed(2)} Best Salary: ${best.bestSalary().toFixed(2)}`;

        const workersOutput = document.querySelector('#workers p');
        workersOutput.textContent = '';
        best.employees.sort((a, b) => b.salary - a.salary).forEach(x => workersOutput.textContent += `Name: ${x.name} With Salary: ${x.salary} `);
    }
}
