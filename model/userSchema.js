const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        unique:true,
        required:true,
    },
    gmail:{
        type:String,
        unique:true,
        required:true,
    },
    hobby:String,
})


// creating model of mongooose 

const userData=mongoose.model("userData",userSchema);


module.exports=userData;