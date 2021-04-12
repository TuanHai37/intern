import lodash from 'lodash'
//Đây là hàm sẽ trả về một object với thuộc tính là thuộc tính của object nguồn
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
var result=lodash.pick(object, ['a', 'c']);
console.log(result); // {'a':1,'c':3}

var object1={"name":"Hai","type":"male","active":true}
console.log(lodash.pick(object1,["name","active"]));