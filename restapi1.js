const express=require("express")
const moongose=require("mongoose");
const app=express();
const User=require("./mongo2");


app.use(express.json());
app.post('/home',(req,res)=>{
    const home =new User(req.body);
    home.save().then(()=>{
        res.send(home)
    }).catch((err)=>{
        console.log(err);

    })
   
})
app.listen(3000,()=>{
    console.log("running");
})
