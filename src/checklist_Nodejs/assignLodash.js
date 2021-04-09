import lodash from 'lodash'

var foo = { a: "a property" };
var bar = { b: 4, c: "an other property" }

var result = lodash.assign({ a: "an old property" }, foo, bar);
console.log(result);
// result => { a: 'a property', b: 4, c: 'an other property' }

var a={game:"No"}
var b={x:"Yeu By"}
var result1 =lodash.assign({mx:"Lien Minh"},a,b)
console.log(result1);