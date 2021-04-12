//omit(object, [paths]) hàm này truyền vào một object chứa các thuộc tính
//tham số thứ hai là các thuộc tính của object không được trả về khi của kết quả trả về.
import lodash from 'lodash'

var obj={
    'name': 'Hoang', 'age': 20, 'address': 'Ha Noi'
}
var result =lodash.omit(obj,'age')
console.log(result);