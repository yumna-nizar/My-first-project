import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const port = 3000;
const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://yumna:resultrun@ac-trsjeem-shard-00-00.ill7bdz.mongodb.net:27017,ac-trsjeem-shard-00-01.ill7bdz.mongodb.net:27017,ac-trsjeem-shard-00-02.ill7bdz.mongodb.net:27017/?ssl=true&replicaSet=atlas-e5qzkv-shard-0&authSource=admin&appName=demo",
    );
    console.log("database connected succesfully");
  } catch (error) {
    console.error("❌ DB Error:", error.message);
    process.exit(1);
  }
};
connectDB();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
});
const Student = mongoose.model("Student", studentSchema);

app.get("/", (req, res) => {});

app.post("/login", (req, res) => {
  try {
    console.log("request reached backend");
    const { email, password } = req.body;
    if (email === "admin@gmail.com" && password === "1234") {
      return res.status(200).json({ success: true, message: "Logged in as admin" });
    }
    return res.json({ success: false, message: "Invalid admin credentials" });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ success: false, message: "Server error during login" });
  }
});

app.post("/addstudent", async (req, res) => {
  console.log("Add student route hit");
  const { studentname, email, age } = req.body;

  if(!studentname || !email || !age)
  {
    return res.status(400).json({error:"all fieldsssss are required"});
  }
  const founduser=await Student.findOne({email});
  if(founduser)
  {
    return res.status(409).json({message:"student with this email id alrady exists"});
  }
  try {
    const student = new Student({
     name:studentname,
      age,
      email,
    });
    await student.save();
    return res
      .status(201)
      .json({ message: "Student added successfully",student:studentname});
  } catch (error) {
    console.error("Add student error:", error);
    return res.status(500).json({ message: "Unable to add student." });
  }
});

app.get("/viewstudent",async (req,res)=>
{
try{
    const studs=await Student.find();
    res.status(200).json(studs);
}
catch(error)
{
    res.status(500).json({message:"unable to fetch student detials"});
}
});

app.listen(port, () => {
  console.log(`server is listening in port ${port}`);
});
