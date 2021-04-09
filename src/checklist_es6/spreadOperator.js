//Spread : ...

//Sao chep mang

const arr=[1,2,3,4,5]
const arr1=[...arr] //log arr1 :1,2,3,4,5


const numbers = [37, -17, 7, 0]
console.log(Math.min(numbers)) // output là NaN do hàm này không nhận array là tham số

//Sử dụng spread operator
console.log(Math.min(...numbers)) // output: -17 
console.log(Math.max(...numbers)) // 37
