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
             alert(`${response.data.student} ${response.data.message} `);

    }
    catch(error)
    {
        console.error(error.response.data.message);
         alert(error.response.data.message);
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
