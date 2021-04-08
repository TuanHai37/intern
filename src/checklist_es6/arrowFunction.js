//Khai bao kieu ES5

let a=function(a, b){
    return a + b + 100;
  }

//Khai bao kieu ES6
var a=2;
var b=3;
()=>{
   return a+b
}
/**
 * (param1, param2, …, paramN) => { statements }
    (param1, param2, …, paramN) => expression
    // tương đương với: (param1, param2, …, paramN) => { return expression; }

    // Dấu ngoặc đơn không bắt buộc khi chỉ có một tham số truyền vào:
    (singleParam) => { statements }
    singleParam => { statements }

    // Hàm khi không có tham số truyền vào bắt buộc phải là dấu ():
    () => { statements }
    () => expression // tương đương: () => { return expression; }
 */