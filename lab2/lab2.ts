enum Category {
    businessAnalyst = 'Business analyst',
    developer = 'Developer',
    designer = 'Designer',
    qa = 'QA',
    scrumMaster = 'Scrum master'
}

//task 2.1
interface PrizeLogger{
    (text: string): void;
}

//task 1.1
interface worker{
    id: number;
    Name: string;
    surname: string;
    available: boolean;
    salary: number;
    category: Category;
    markPrize: PrizeLogger;
}

//task 2.3
let logPrize: PrizeLogger = (text) => {
    console.log(text);
};

logPrize('Example');

//task 1.2
function getAllWorkers(): worker[] {
    let workers: worker[] = [
        {id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.qa, markPrize: logPrize },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.designer, markPrize: logPrize },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.developer, markPrize: logPrize },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.scrumMaster, markPrize: logPrize }
    ];
    return workers;
}

//task 1.3
function getWorkerByID(id: number, workers: worker[] = getAllWorkers()): worker | undefined {
    return workers.find(worker => worker.id == id)
}

console.log(getWorkerByID(5));

//task 1.4
function PrintWorker(worker: worker): void {
    console.log(`${worker.Name} ${worker.surname} got salary ${worker.salary}`)
}

let workers = getAllWorkers();
PrintWorker(workers[1]);

//task 3.1
interface Person {
    name: string;
    email: string;
}

//task 3.2
interface Author extends Person {
    numBooksPublished: number;
}

//task 3.3
interface Librarian extends Person {
    department: string;
    assistCustomer(custName: string): void;
}

//task 3.4
let favoriteAuthor: Author = {name: 'Anastasiia', email: 'anastasiia@gmail.com', numBooksPublished: 10};

//task 3.5 закоментувати
/* let favoriteLibrarian: Librarian = {name: 'Anastasiia', email: 'anastasiia@gmail.com', department: 'Cataloging', assistCustomer(custName: string) {
    console.log(custName)
}}; */

//task 4.1
class UniversityLibrarian implements Librarian {
    name: string;
    email!: string;
    department!: string;

    constructor(name: string) {
        this.name = name;
    }

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`)
    }
}

//task 4.3 розкоментувати
let favoriteLibrarian = new UniversityLibrarian('Anastasiia');
favoriteLibrarian.assistCustomer('Mary');

//task 7.1 розкоментувати
abstract class ReferenceItem {
    private _publisher!: string;
    static department: string = 'Cataloging';
    /*title: string;
    year: number;

    constructor(newTitle: string, newYear: number){
        console.log(`Creating a new ReferenceItem ...`);
        this.title = newTitle;
        this.year = newYear;
    }*/

    //task5.3
    constructor(public title: string, protected year: number){
        console.log(`Creating a new ReferenceItem ...`);
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}. Department: ${ReferenceItem.department}`);
    }

    //task 7.2
    abstract printCitation(): void;

    //task 5.4
    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string){
        this._publisher = newPublisher;
    }

}

//task 5.2 закоментувати
/* let ref = new ReferenceItem('Example', 2023);
ref.printItem();
//task 5.4
ref.publisher = 'black';
console.log(ref.publisher); */

//task 6.1
class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }

    //task 6.3
    printItem(): void {
        super.printItem();

        console.log(`Edition: ${this.edition} ${this.year}`)
    }

    //task 7.3 розкоментувати
    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

//task 6.2
let refBook = new Encyclopedia('Encyclopedia', 2023, 10);
refBook.printItem();
refBook.printCitation();

