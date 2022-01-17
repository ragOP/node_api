const express=require('express')
const app=express();
const path=require('path')
const bodyparser=require('body-parser')
const port =process.env.PORT|| 9000
const session=require('express-session')
app.set('view engine','ejs')
const {v4:uuidv4}=require("uuid");
const router=require('./router')
//load stataic assets 
app.use('/static',express.static(path.join(__dirname,'public')))
app.use(bodyparser.urlencoded({extended:true}))

app.use(session({
    secret:uuidv4(),
    resave:'false',
    saveUninitialized:'true'
}))

app.use('/route',router)
//home route
app.get('/',(req,res)=>{
    res.render('base',{title:'Login Page'})
})

app.listen(port,()=>{
    console.log("listen 9000")
})