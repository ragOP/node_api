const express=require('express');
var router =express.Router();
const cred={
    email:"admin@gmail.com",
    password:"admin123"
}

//login users
    router.post('/login',(req,res)=>{
        if(req.body.email==cred.email && req.body.password==cred.password)
        {
                    req.session.user=req.body.email;
// res.redirect('./abc.js')
            res.end('login Succesfull')
        }
        else{
            res.end("invalid Credentials")
        }
    })

    module.exports=router;