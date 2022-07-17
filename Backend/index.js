const express = require("express");
const app = express();

const port = 7000;

const userRouter = require("./router/userRouter");
app.use("/user",userRouter);
app.get("/",(req,res)=>{
    res.send("Mini project");
});

app.listen(port,()=>{
    console.log("SERVER STARTED");
})