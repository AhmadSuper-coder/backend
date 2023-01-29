const db=require("../database/db");
const userData=require("../model/userSchema");

const getUser= async (req,res)=>{
    try{
        const data=await userData.find();
        res.status(200).send(data);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
}

const getSingleUser=async (req,res)=>{
    try{
        const id=req.params.id;
        const singleData=await userData.findById(id);
        res.status(200).send(singleData);

    }catch(e){
        res.status(500).send(e);
    }
}

const addUser=async (req,res)=>{
    const data=req.body;
    const createUser=await userData(data);
    createUser.save().then(
        ()=>{
            res.status(201).send(createUser);
        }
    ).catch((e)=>{
        res.status(500).send(e);
    })
  
}   


const updateUser=async (req,res)=>{
    const id=req.params.id;
    try{
        const updateData=await userData.findByIdAndUpdate(id,req.body);
        res.status(200).send("SucessFully Updated data ");
    }catch(e){
        res.status(500).send(e);
    }
}

const deleteUser=async(req,res)=>{
    try{
        const id=req.params.id;
        const deleteData=await userData.deleteOne({_id:id});
        console.log("Data successfully deleted");
        res.status(201).send("Data is successfuly deleted");
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
}


module.exports={addUser,getUser,deleteUser,getSingleUser,updateUser};