

let sum=(a,b,callback)=>{
    setTimeout(()=>{
        let err,result;
        if(typeof a!="number" || typeof b!="number")
        {
            err="Gia tri truyen vao phai la so"
            return callback(err,null)
        }
        result = (a+b);
        return callback(null,result)
    },1000)
}
let total=sum(7,10,(err,total)=>{
    if(err){
        console.log(err);
        return err  
    }
    console.log(total);
})