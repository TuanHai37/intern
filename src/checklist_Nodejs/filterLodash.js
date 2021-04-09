import lodash from 'lodash'

var arr1=[
    {name:"No",active:true},
    {name:"By",active:false},
    {name:"Hai",active:false}
]
console.log(lodash.filter(arr1, {  "active": false }))
