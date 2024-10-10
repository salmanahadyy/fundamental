console.log("HALLO".toLowerCase())
class Employee {
    constructor(protected name: string, protected hourlyRate: number) {}

    calculateSalary(hours: number): number {
        return hours <= 6 ? hours * this.hourlyRate : 6 * this.hourlyRate + (hours - 6) * (this.hourlyRate * 0.75);
    }
}

class FulltimeEmployee extends Employee {
    constructor(name: string) {
        super(name, 100000);
    }
}

class ParttimeEmployee extends Employee {
    constructor(name: string) {
        super(name, 50000);
    }
}

// Contoh penggunaan
const fulltime = new FulltimeEmployee("John");
console.log(`John's salary: IDR ${fulltime.calculateSalary(8)}`);

const parttime = new ParttimeEmployee("Alice");
console.log(`Alice's salary: IDR ${parttime.calculateSalary(5)}`);