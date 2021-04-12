import lodash from 'lodash'

//Đây là hàm sẽ trả về là một array, tham số thứ hai sẽ là một hàm tính toán hoặc hàm điều kiện

function check(n){
    if(n>3){
        return n;
    }
}
var result =lodash.map([3,4],check)
console.log(result);

function sum(a){
    if(a>2){
        return a*2;
    }
}
var result1=lodash.map([6,8],sum)
console.log(result1);

var users = [
    { 'user': 'Le' },
    { 'user': 'Hai' }
  ];
var result3=lodash.map(users,'user')
console.log(result3);