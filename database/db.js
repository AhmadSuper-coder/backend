const mongoose=require("mongoose");
const dotenv=require("dotenv");

dotenv.config();
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;


mongoose.set("strictQuery", false);
const url=`mongodb+srv://${username}:${password}@cluster0.ebgog9n.mongodb.net/crudapp`;
mongoose.connect(url,{ useUnifiedTopology: true, useNewUrlParser: true }).then(
    ()=>{
        console.log("Database has been statblish");
    }
).catch((e)=>{
    console.log(e);
})



















