const express=require("express");
const {addUser,getUser,deleteUser,getSingleUser,updateUser}=require("../controller/Usercontroller");

const router=express.Router();



router.get("/all",getUser);
router.get("/:id",getSingleUser);
router.post("/add",addUser);
router.patch("/:id",updateUser);
router.delete("/:id",deleteUser);


module.exports=router;


