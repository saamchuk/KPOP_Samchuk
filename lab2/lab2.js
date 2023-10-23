"use strict";
var Category;
(function (Category) {
    Category["businessAnalyst"] = "Business analyst";
    Category["developer"] = "Developer";
    Category["designer"] = "Designer";
    Category["qa"] = "QA";
    Category["scrumMaster"] = "Scrum master";
})(Category || (Category = {}));
//task 2.3
let logPrize = (text) => {
    console.log(text);
};
logPrize('Example');
//task 1.2
function getAllWorkers() {
    let workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.qa, markPrize: logPrize },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.designer, markPrize: logPrize },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.developer, markPrize: logPrize },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.scrumMaster, markPrize: logPrize }
    ];
    return workers;
}
//task 1.3
function getWorkerByID(id, workers = getAllWorkers()) {
    return workers.find(worker => worker.id == id);
}
console.log(getWorkerByID(5));
//task 1.4
function PrintWorker(worker) {
    console.log(`${worker.Name} ${worker.surname} got salary ${worker.salary}`);
}
let workers = getAllWorkers();
PrintWorker(workers[1]);
//task 3.4
let favoriteAuthor = { name: 'Anastasiia', email: 'anastasiia@gmail.com', numBooksPublished: 10 };
//task 3.5 закоментувати
/* let favoriteLibrarian: Librarian = {name: 'Anastasiia', email: 'anastasiia@gmail.com', department: 'Cataloging', assistCustomer(custName: string) {
    console.log(custName)
}}; */
//task 4.1
class UniversityLibrarian {
    constructor(name) {
        this.name = name;
    }
    assistCustomer(custName) {
        console.log(`${this.name} is assisting ${custName}`);
    }
}
//task 4.3 розкоментувати
let favoriteLibrarian = new UniversityLibrarian('Anastasiia');
favoriteLibrarian.assistCustomer('Mary');
//task 7.1 розкоментувати
class ReferenceItem {
    /*title: string;
    year: number;

    constructor(newTitle: string, newYear: number){
        console.log(`Creating a new ReferenceItem ...`);
        this.title = newTitle;
        this.year = newYear;
    }*/
    //task5.3
    constructor(title, year) {
        this.title = title;
        this.year = year;
        console.log(`Creating a new ReferenceItem ...`);
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year}. Department: ${ReferenceItem.department}`);
    }
    //task 5.4
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }
}
ReferenceItem.department = 'Cataloging';
//task 5.2 закоментувати
/* let ref = new ReferenceItem('Example', 2023);
ref.printItem();
//task 5.4
ref.publisher = 'black';
console.log(ref.publisher); */
//task 6.1
class Encyclopedia extends ReferenceItem {
    constructor(title, year, edition) {
        super(title, year);
        this.edition = edition;
    }
    //task 6.3
    printItem() {
        super.printItem();
        console.log(`Edition: ${this.edition} ${this.year}`);
    }
    //task 7.3 розкоментувати
    printCitation() {
        console.log(`${this.title} - ${this.year}`);
    }
}
//task 6.2
let refBook = new Encyclopedia('Encyclopedia', 2023, 10);
refBook.printItem();
refBook.printCitation();
//# sourceMappingURL=lab2.js.map