
// function obj(someobj){
//     return new Promise((resolve,reject)=>{
//         if(typeof someobj== 'number')
//         {
//             return reject("err")
//         }
//         else{
//             return resolve("Hi")    
//         }
        
//     })
// }

// obj(1)
// .then((result)=>console.log(result))
// .catch((err)=>{console.log(err)})

// function obj2(someObj2){
//     if(typeof someObj2== 'number')
//     {
//         return Promise.reject("errr")
//     }
//     else{
//         return Promise.resolve("Hii")    
//     }
// }
// obj2(1)
// .then((result)=>console.log(result))
// .catch((err)=>{console.log(err)})

// import promise from 'bluebird'

// function obj2(someObj2){
//     return new promise.method(()=>{
//         if(typeof someObj2== 'number')
//         {
//             throw new TypeError("err")
//         }
//         else{
//             return 2    
//         }
//     })    
// }
// function By= promise.method(()=>{

// })
// console.log(obj2(1));
