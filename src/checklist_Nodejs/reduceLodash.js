import lodash from 'lodash'

var users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 17 },
    { name: "Bill", age: 28 },
    { name: "Emily", age: 28 },
    { name: "Jack", age: 30 }
]

let kq=lodash.reduce(users,(result,user)=>{
    if(user.age>16 && user.age <=60){
        (result[user.age] || (result[user.age] = [])).push(user)
    }
    return result;
},{})
console.log(kq);