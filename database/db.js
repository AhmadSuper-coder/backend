const mongoose=require("mongoose");

mongoose.set("strictQuery", false);
const url="mongodb+srv://ahmad:Q5LMnwUMWcBnH1q1@cluster0.ebgog9n.mongodb.net/crudapp";
mongoose.connect(url).then(
    ()=>{
        console.log("Database has been statblish")
    }
).catch((e)=>{
    console.log(e);
})



















