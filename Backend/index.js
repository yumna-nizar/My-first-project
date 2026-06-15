import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const port=3000;
const app=express();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://yumna:resultrun@ac-trsjeem-shard-00-00.ill7bdz.mongodb.net:27017,ac-trsjeem-shard-00-01.ill7bdz.mongodb.net:27017,ac-trsjeem-shard-00-02.ill7bdz.mongodb.net:27017/?ssl=true&replicaSet=atlas-e5qzkv-shard-0&authSource=admin&appName=demo");
    console.log("database connected succesfully");
  } catch (error) {
    console.error("❌ DB Error:", error.message);
    process.exit(1);
  }
};
connectDB();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const studentSchema=new mongoose.Schema(
    {
        name:String,
        age:Number,
        email:String,
       
    }
);
const Student=mongoose.model("Student",studentSchema);

app.get("/", (req, res) => {
  
});

app.post("/login",(req,res)=>{
    console.log(req.body);
    console.log("hello we have reached in the login api endpoint");
    res.send("Login successful");
    
});


app.post("/addstudent",async (req,res)=>
{
  console.log("Home route hit");
    const {studentname,email,age}=req.body;
   
    const firstStudent=new Student({
        name:studentname,
        age:age,
        email:email
    });
    await firstStudent.save();
     res.send("Home");
});

app.listen(port,()=>{
    console.log(`server is listening in port ${port}`);
});
