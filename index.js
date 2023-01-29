var express=require("express");
const app=express();
const router=require("./route/route");
const cors=require("cors");
const port=process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use("/",router);




// heroku step 3 
// if (process.env.NODE_ENV==="production"){
//     app.use(express.static("client/build"))
// }


app.listen(port,()=>{
    console.log("Running on port number : 8080");
})
