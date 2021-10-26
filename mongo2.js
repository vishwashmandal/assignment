const express=require("express")
const moongose=require("mongoose");
const app=express();

moongose.connect('mongodb://localhost:27017/itdata1').then(()=>{
    console.log("connect")

}).catch((err)=>{
    console.log("err");
})
const User=moongose.model("home",{[
    name:{
        type:String
       


    },
    roll:{
        type:Number
        
    },
    branch:{
        type:String
       

    },
    college:{
        type:String
    }
    

]

})

module.exports=User;