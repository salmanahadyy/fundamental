class Product{
    productName:string = ""
    productPrice: number = 0

    constructor(name:string,price:number){
        this.productName = name
        this.productPrice= price
    }
}

const product1 = new Product("apple",20000)
const product2 = new Product("pisang",30000)
const product3 = new Product("cherry",50000)

class Transaction{
#total = 0
#products : object[] = []

addToCart(product:Product, qty:number){
    this.#products.push({ ...product,qty, total: product.productPrice *qty})
    this.#total += product.productPrice *qty
}

show(){
    this.#products.push({ total: this.#total})
    console.table(this.#products)
}

checkout (money:number){
    if (money < this.#total){
        throw new Error("Uang anda tidak cukup");
        
    } else{
        console.log(`Cash : ${money}`)
        console.log(`Return : ${money - this.#total}`)
        console.log(`~~~ Thank You ~~~`)
    }
}
}

const transaction1 = new Transaction()
transaction1.addToCart(product1,2)
transaction1.addToCart(product2,1)
transaction1.addToCart(product3,3)

transaction1.show()
transaction1.checkout(250000)