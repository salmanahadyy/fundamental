class Product{
    productName = ""
    productPrice = 0

    constructor(name:string,price:number){
        this.productName = name
        this.productPrice= price
    }
}

class Transaction extends Product {
total = 0
constructor (total:number, qty:number){
    super("laptop",qty)
    this.total = total
}
}