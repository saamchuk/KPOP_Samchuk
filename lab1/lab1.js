"use strict";
//task 2.1
var Category;
(function (Category) {
    Category["businessAnalyst"] = "Business analyst";
    Category["developer"] = "Developer";
    Category["designer"] = "Designer";
    Category["qa"] = "QA";
    Category["scrumMaster"] = "Scrum master";
})(Category || (Category = {}));
//task 1.1
function getAllworkers() {
    let workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.qa },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.scrumMaster },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.designer },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.developer }
    ];
    return workers;
}
//task 1.2
function logFirstAvailable(workers = getAllworkers()) {
    console.log(`Кількість робітників в масиві: ${workers.length}\n`);
    console.log(`Ім'я та прізвище доступних робітників:`);
    for (let worker of workers) {
        if (worker.available) {
            console.log(`${worker.Name} ${worker.surname}`);
        }
    }
    console.log(``);
}
//task 1.3
console.log(`task 1`);
let workers = getAllworkers();
logFirstAvailable(workers);
//task 2.2 - add categories to the objects of the getAllWorkers() function
//task 2.3
function getWorkersNamesByCategory(category = Category.designer) {
    let result = [];
    for (let worker of workers) {
        if (worker.category == category) {
            result.push(worker.surname);
        }
    }
    return result;
}
//task 2.4
function logWorkersNames(result) {
    console.log(result, `\n`);
}
console.log(`task 2`);
let surnames = getWorkersNamesByCategory(Category.qa);
logWorkersNames(surnames);
//task 3.1 - add id to the objects of the getAllWorkers() function
//task 3.2
console.log(`task 3`);
console.log(`Імена та прізвища робітників за категорією ${Category.developer}:`);
workers.forEach(worker => {
    if (worker.category == Category.developer)
        console.log(`${worker.Name} ${worker.surname}`);
});
console.log(``);
//task 3.3
function getWorkerByID(id) {
    let worker = workers.find(worker => worker.id == id);
    if (worker) {
        let { Name, surname, salary } = worker;
        return { Name, surname, salary };
    }
    else
        return `Такого робітника не знайдено\n`;
}
let worker_by_id = getWorkerByID(5);
console.log(worker_by_id);
console.log(`task 4`);
//task 4.1
function createCustomerID(name, id) {
    return `${name} ${id}`;
}
//task 4.2
let myID = createCustomerID('Ann', 10);
console.log(myID);
//task 4.3
let IdGenerator = (name, id) => { return `${name} ${id}`; };
let generate = IdGenerator('Anastasiia', 20);
console.log(`Згенероване id: ${generate}\n`);
IdGenerator = createCustomerID;
generate = IdGenerator('Anastasiia', 19);
console.log(`Згенероване id: ${generate}\n`);
console.log(`task 5`);
//task 5.1
function createCustomer(name, age, city) {
    console.log(`Ім'я: ${name}`);
    if (age) {
        console.log(`Вік: ${age}`);
    }
    if (city) {
        console.log(`Місто: ${city}`);
    }
    console.log(``);
}
createCustomer('Katie');
createCustomer('Alice', 5);
createCustomer('Katie', 6, 'Kyiv');
//task 5.2
let surnames_by_designed = getWorkersNamesByCategory();
logWorkersNames(surnames_by_designed);
//task 5.3
logFirstAvailable();
//task 5.4
function сheckoutWorkers(customer, ...workerIDs) {
    console.log(`Ім'я заданого замовника: ${customer}`);
    let result = [];
    for (let id of workerIDs) {
        let worker = workers.find(item => item.id == id);
        if (worker && worker.available) {
            result.push(`${worker.Name} ${worker.surname}`);
        }
    }
    return result;
}
let myWorkers = сheckoutWorkers('Ann', 1, 2, 4);
myWorkers.forEach(worker => console.log(`${worker}`));
//# sourceMappingURL=lab1.js.map