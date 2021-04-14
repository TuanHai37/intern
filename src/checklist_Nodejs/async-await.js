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
(async()=>{
    try{
        let total1=await sum(7,10)
        let total2=await sum(total1,10)
        let total3=await sum(total2,12)
        console.log(total3);
    }catch(err){
        console.log(err);
    }
})();

/**
 * (async()=>{
 * 
 * 
 * }() => Cach thuc thi 1 function
 */