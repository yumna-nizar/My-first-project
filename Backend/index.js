import express from 'express';
const port=3000;
const app=express();

app.use(express.urlencoded({extended:true}));

app.post("/login",(req,res)=>{
    console.log("the login form data is submitted")
    res.send("login submitted");
    
});
app.listen(port,()=>{
    console.log(`server is listening in port ${port}`);
});
