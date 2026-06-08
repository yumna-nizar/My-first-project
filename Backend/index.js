import express from 'express';
import cors from 'cors';
const port=3000;
const app=express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", (req, res) => {
    console.log("Home route hit");
    res.send("Home");
});

app.post("/login",(req,res)=>{
    console.log(req.body);
    console.log("hello we have reached in the login api endpoint");
    res.send("Login successful");
    
});
app.listen(port,()=>{
    console.log(`server is listening in port ${port}`);
});
