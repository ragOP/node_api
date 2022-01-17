const dbConnect=require('./mongo');
const express=require('express')
const app=express();
app.get('/',async (res,resp)=>{
  const data=await dbConnect
        data=await data.find().toArray();
    
    resp.send(data)
});

app.listen(9000)