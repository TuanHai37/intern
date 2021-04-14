let sum=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let err,result;
            if(typeof a!="number" || typeof b!="number")
            {
                return reject(err,"Gia tri truyen vao phai la so")
            }
            return resolve((a+b))
        },1000)
    })
}
sum(7,10)
.then((total)=>sum(total,10))
.then((total1)=>sum(total1,12))
.then(total2=>{
    console.log(total2);
})
.catch((err)=>{
    console.log(err);
})