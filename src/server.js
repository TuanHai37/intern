const express =require ('express')
const bodyParser =require ( 'body-parser')
const initRoutes =require ('./routes/api')

const PORT=process.env.PORT||3000
//Init app
let app=express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) //Mo rong nhung giu lieu Json

//Init routes
initRoutes(app);

app.listen(PORT,()=>{
    console.log(`Hi,I'm running at ${PORT}/`); 
})