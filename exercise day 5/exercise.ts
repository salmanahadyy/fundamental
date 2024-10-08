class Student{
    name = ""
    email = ""
    dob = ""
    score = 0

    constructor(nama:string, surel:string, tanggal:string,nilai:number){
        this.name = nama
        this.email = surel
        this.dob = tanggal
        this.score = nilai
    }

    getAge(){
        //code
        let difference: number = new Date().getTime()
         return 0
    }
}

const student1 = new Student("andi","andi@gmail.com", "2002-01-01",80)
const student2 = new Student("budi","budi@gmail.com", "2000-01-01",85)
const student3 = new Student("caca","caca@gmail.com", "1998-01-01",90)

const arrStudent = [ student1,student2,student3]

class Dob extends Student {
highest=0
lowest = 0
average = 0

constructor (highest: number, lowest: number, average: number){
    super("","","",0)
    this.highest = highest
    this.lowest = lowest
    this.average = average
}
}

const