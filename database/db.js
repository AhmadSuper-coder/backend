const mongoose=require("mongoose");

mongoose.set("strictQuery", false);
const url="mongodb+srv://ahmad:Sonu001912@cluster0.ebgog9n.mongodb.net/crudapp";
mongoose.connect(url,{ useUnifiedTopology: true, useNewUrlParser: true }).then(
    ()=>{
        console.log("Database has been statblish")
    }
).catch((e)=>{
    console.log(e);
})



















