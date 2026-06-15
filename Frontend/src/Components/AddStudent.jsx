import { useState } from "react";
import "../CompStyles/addstudent.css";
import axios from 'axios';

function AddStudent() {
  const [studentname, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");

   async function submitStudent() {
    console.log(`${studentname} ${email} ${age}`);
    try {
        const response=await axios.post("http://localhost:3000/addstudent",
            {
                studentname,
                email,
                age
             });
             console.log(response.data);
             alert("student request send succesfully");

    }
    catch(error)
    {
        console.error(error);
         alert("Error while adding student");
    }
    
    
  }

  return (
    <div className="addstudent-container">
      <h1>Student Adding Form</h1>
      <div className="form-group">
        <label>Student name:</label>
        <input type="text" onChange={(e) => setname(e.target.value)}></input>
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="text" onChange={(e) => setemail(e.target.value)}></input>
      </div>
      <div className="form-group">
        <label>age:</label>
        <input type="text" onChange={(e) => setage(e.target.value)}></input>
      </div>
      <div className="button-container">
        <button className="submit-btn" onClick={submitStudent}>
          Submit
        </button>
      </div>
    </div>
  );
}
export default AddStudent;
