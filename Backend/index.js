const express = require("express");
const app = express();

const port = 7000;

const userRouter = require("./router/userRouter");
const issueRouter = require("./router/issueRouter");
const organizationRouter = require("./router/organizationRouter");



app.use("/user",userRouter);
app.use("/issue",issueRouter);
app.use("/organization",organizationRouter);
app.get("/",(req,res)=>{
    res.send("Mini project");
});

app.listen(port,()=>{
    console.log("SERVER STARTED");
})