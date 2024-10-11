class Employee{
    name = ""
    hourlyRate = 0
    type = ""
    bSallary = 0
    otSallary = 0

    constructor(nama:string, type: string, bSallary: number, otSallary: number){
        this.name = nama
        this.type = type
        this.bSallary = bSallary
        this.otSallary = otSallary
    }

    setHour (n:number){
this.hourlyRate += n
    }

getSallary(){
if (this.hourlyRate <=6){
    return this.hourlyRate * this.bSallary
} else{
    return this.bSallary * 6 + (this.hourlyRate -6) * this.otSallary
}
}

}

class FulltimeEmployee extends Employee{
    constructor(name:string){
        super(name,"Fulltime",100000,75000)
    }
}


class ParttimeEmployee extends Employee {
    constructor(name:string) {
        super(name,"Parttime",50000,30000)
    }
}

const employee1 = new FulltimeEmployee("kemal")
employee1.setHour(5)
console.log(employee1.getSallary())