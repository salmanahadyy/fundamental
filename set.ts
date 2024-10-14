const fruits: string[]= ["banana", "apple","jackfruit","apple"]

const newFruits = new Set(fruits)

newFruits.add("melon")
newFruits.delete("jackfruit")

newFruits.forEach((item)=>{
    console.log(item)
})

console.log(newFruits)


const num = new Set ([1,2,1,3])

num.forEach((item)=>{
    console.log(item)
})