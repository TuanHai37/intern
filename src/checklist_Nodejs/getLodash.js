import lodash from 'lodash'
var object = { 'name': 'Hoang', 'age': 10};
lodash.get(object, 'name');
//kq: "Hoang"
console.log(
    lodash.get(object, 'address'));
//kq: "Ha Noi", nếu không để giá trị default cho trường address thì giá trị sẽ là undefined