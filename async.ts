// const tryPromise = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         const success = true
//         if(success){
//             resolve('Task 2')
//         } else{
//             reject('error')
//         }
//     }, 3000);
// })


// const myFunc = async () => {
//     console.log('Task 1')
//     await tryPromise.then((res)=>console.log(res)).catch((err)=>console.log(err)).finally(()=>console.log('finally done'))
//     console.log('Task 3')
// }

// // myFunc()

// const tryCatch = async () =>{
//     try {
//         console.log('Task 1')
//         const res = await tryPromise
//         console.log(res)
//         console.log('Task 3')
//     } catch (error) {
//         console.log(error)
//     }
// }

// tryCatch()

const getData = async() => {
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/use')
        if(!response.ok) throw 'failed to fetch'
        const users = await response.json()
        console.log(users)
    } catch (error) {
        console.log(error)
    }
}

getData()