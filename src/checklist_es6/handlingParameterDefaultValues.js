
/** 
 * Gia tri mac dinh la undefined . Khi do t ES6 ta co the gan thang gia tri la 1 gia tri cu the
*/

function foo(value = koo()) {
    return value;
}
 
function koo() {
     return "Ignite UI";
}
 
var a = foo();
console.log(a);

//Su dung lai cac tham so mac dinh
function foo(num1 = 9, num2 = num1 + 8){
    console.log(num2);
}
foo();
//Log 17

/**
 * Tham số mặc định JavaScript rất hữu ích trong khi viết hàm. Khi gọi hàm, nếu thiếu tham số, tính năng tham số mặc định cho phép bạn gán giá trị mặc định cho tham số hàm, thay vì không xác định.
 */