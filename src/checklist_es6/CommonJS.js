//Common JS
/**
 * CommonJS không sử dụng từ khóa import mà sử dụng require function để import
 * Vì CommonJS là một pattern của Node.js, do đó để sử dụng được phía frontend, chúng ta cần một số công cụ bên thứ 3, trong phần này mình sẽ sử dụng Browserify 
 */
import person from './ES6Module'
import add from './ES6Module'
 const log = (message) => console.log(message)
console.log(person);
console.log(add);
 module.exports = {log}
