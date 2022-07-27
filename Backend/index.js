const express = require("express");
const app = express();

const port = 7000;
const utilRouter = require("./router/utils");
const userRouter = require("./router/userRouter");
const issueRouter = require("./router/issueRouter");
const organizationRouter = require("./router/organizationRouter");
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.static("./static"));
app.use("/util", utilRouter);
app.use("/user",userRouter);
app.use("/issue",issueRouter);
app.use("/organization",organizationRouter);
app.get("/",(req,res)=>{
    res.send("Mini project");
});

app.listen(port,()=>{
    console.log("SERVER STARTED");
})