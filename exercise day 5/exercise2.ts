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
constructor (total:number, price:number){
    super("laptop",price)
    this.total = total
}
}